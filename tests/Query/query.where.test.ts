import { Query } from "@/Query/query";
import { describe, it, expect } from "vitest";

describe("query", () => {
  it("sets a where", () => {
    const query = new Query();

    query.where("prop1", "val1");

    expect(query.filters).toStrictEqual([{ key: "prop1", value: "val1" }]);
  });

  it("sets a where with null", () => {
    const query = new Query();

    query.where("prop1", null);

    expect(query.filters).toStrictEqual([{ key: "prop1", value: null }]);
  });

  it("sets a where with string and space", () => {
    const query = new Query();

    query.where("prop1", "some value");

    expect(query.filters).toStrictEqual([{ key: "prop1", value: "some value" }]);
  });

  it("sets multiple wheres", () => {
    const query = new Query();

    query.where("prop1", "val1").where("prop2", "val2");

    expect(query.filters).toStrictEqual([
      { key: "prop1", value: "val1" },
      { key: "prop2", value: "val2" },
    ]);
  });

  it("sets where with multiple values", () => {
    const query = new Query();

    query.where("prop1", ["val1", "val2", null, 4]);

    expect(query.filters).toStrictEqual([{ key: "prop1", value: ["val1", "val2", null, 4] }]);
  });

  it("sets where with default value of true", () => {
    const query = new Query();

    query.where("scope");

    expect(query.filters).toStrictEqual([{ key: "scope", value: true }]);
  });
});
