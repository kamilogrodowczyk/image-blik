import { jest } from "@jest/globals";
import { getByAltText, getByTestId, getByText } from "@testing-library/dom";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";
import { createPassword } from "../helpers/createPassword";
import { createImages, appendChildren } from "../helpers/addElements";
import { copyValue } from "../helpers/copyValue";

const html = fs.readFileSync(
  path.resolve(__dirname, "../../index.html"),
  "utf-8",
);

let dom;
let container;

describe("index.html", () => {
  beforeEach(() => {
    dom = new JSDOM(html).window;
    container = dom.document.body;
  });

  it("renders a heading element", () => {
    expect(container.querySelector("h2")).not.toBeNull();
    expect(getByText(container, /Image BLIK/)).toBeInTheDocument();
  });

  it("renders submit button and checks its state", () => {
    expect(container.querySelector("button[type='submit']")).not.toBeNull();
    expect(getByText(container, /Add/)).toBeDisabled();
  });

  it("loads image by input-file", async () => {
    const file = new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" });
    const imageInput = getByTestId(container, "file");
    user.upload(imageInput, file);
    expect(imageInput.files[0]).toStrictEqual(file);
    expect(imageInput.files).toHaveLength(1);
  });

  it("creates password with different arguments", () => {
    expect(createPassword(6)).toHaveLength(6);
    expect(createPassword(6)).toBeTruthy();
    expect(createPassword(0)).toHaveLength(0);
    expect(createPassword(0)).toBeFalsy();
    expect(createPassword(0)).not.toBeNull();
    expect(createPassword("-")).toBeFalsy();
  });

  it("creates images with different arguments", () => {
    expect(createImages("image.jpg", "image.jpg")).toHaveAttribute(
      "src",
      "image.jpg",
    );
    expect(createImages("image.jpg", "image.jpg")).toHaveAttribute(
      "alt",
      "image",
    );
  });

  it("creates new node in DOM", () => {
    const child = createImages("image.jpg", "image.jpg");
    const child1 = createImages("image1.jpg", "image1.jpg");
    const childArray = [child, child1];

    const documentFragment = appendChildren(childArray);
    expect(documentFragment).not.toBeNull();

    const parentWithChildren = document.body.appendChild(documentFragment);
    expect(parentWithChildren).not.toBeNull();
    expect(getByAltText(document.body, "image"));
  });

  it("checks writeText method for navigator.clipboard", async () => {
    const value = "123456";
    const div = document.createElement("div");
    div.innerHTML = `
      <input id="copy" value=${value} />
    `;
    document.body.appendChild(div);
    const clipElement = container.querySelector(".copy-alert");
    const input = div.querySelector("#copy");
    const mockWriteText = jest.fn().mockResolvedValueOnce();
    Object.defineProperty(navigator, "clipboard", {
      value: {
        writeText: mockWriteText,
      },
    });
    await copyValue(clipElement, input);
    expect(mockWriteText).toBeCalledWith(input.value);
    expect(clipElement).toHaveClass("active");
  });
});
