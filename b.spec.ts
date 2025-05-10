import { expect, test } from "@playwright/test";

test("b-001", () => {
  expect(1).toBe(1);
});

test("b-002", () => {
  expect(1).toBe(0);
});
