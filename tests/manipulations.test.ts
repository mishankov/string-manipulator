import { expect, it } from "vitest";
import { doManipulation, type TManipulation } from "../src/manipulations";


it("Test replace manipulation", () => {
  expect(doManipulation("\\3", {type: "replace", from: "\\\\3", to: "result"})).eq("result")
  expect(doManipulation("\\", {type: "replace", from: "\\\\", to: "result"})).eq("result")
})

