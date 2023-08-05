import { describe, expect, test } from "vitest";
import { add } from "../logic";

/**
 * Tests for add. `Describe` is a way to group tests together.
 *
 * Inside of the `describe` block, we have a one or multiple `test` blocks.
 *
 * `test` blocks are where we actually write our tests.
 */
describe("add", () => {
  test("should add two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});
