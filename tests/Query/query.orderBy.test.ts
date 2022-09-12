import { Query } from "@/Query/query";
import { describe, it, expect } from "vitest";

describe("query", () => {
  it("sets a sort from string with default ascending", () => {
    const query = new Query();

    query.orderBy("prop1");

    expect(query.sorts).toStrictEqual([{ key: "prop1", type: "asc" }]);
  });

  it("sets a sort from string with descending", () => {
    const query = new Query();

    query.orderBy("prop1", true);

    expect(query.sorts).toStrictEqual([{ key: "prop1", type: "desc" }]);
  });

  it("sets a sort from string with descending if using orderByDesc", () => {
    const query = new Query();

    query.orderByDesc("prop1");

    expect(query.sorts).toStrictEqual([{ key: "prop1", type: "desc" }]);
  });

  it("can chain sorts", () => {
    const query = new Query();

    query.orderBy("prop1", true).orderBy("prop2");

    expect(query.sorts).toStrictEqual([
      { key: "prop1", type: "desc" },
      { key: "prop2", type: "asc" },
    ]);
  });

  it("overrides duplicate sort with most recent orderBy", () => {
    const query = new Query();

    query.orderBy("prop1", true).orderBy("prop1");

    expect(query.sorts).toStrictEqual([{ key: "prop1", type: "asc" }]);
  });

  it("can clear sorts", () => {
    const query = new Query();

    query.orderBy("prop1", true).orderBy("prop2");

    query.clearOrderBy();

    expect(query.sorts).toStrictEqual([]);
  });
});
