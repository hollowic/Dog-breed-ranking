import { pickRandom } from "../helperFn";

test("pickRandom returns an array of exactly 20 unique", () => {
  let input = [];
  for (let i = 1; i <= 50; i++) {
    input.push(i);
  }

  let output = pickRandom(input);

  const isOutputUnique = new Set(output).size === output.length;

  expect(output).toHaveLength(20);
  expect(isOutputUnique).toBeTruthy();
});
