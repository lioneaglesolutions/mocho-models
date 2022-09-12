import { Query } from "@/Query/query";

describe("query", () => {
  it("sets an include from string", () => {
    const query = new Query();

    query.with("relation");

    expect(query.includes).toStrictEqual(["relation"]);
  });

  it("sets an include from array", () => {
    const query = new Query();

    query.with(["relation", "relation2"]);

    expect(query.includes).toStrictEqual(["relation", "relation2"]);
  });

  it("can chain includes", () => {
    const query = new Query();

    query.with(["relation", "relation2"]).with("relation 3");

    expect(query.includes).toStrictEqual(["relation", "relation2", "relation 3"]);
  });

  it("removes duplicate includes", () => {
    const query = new Query();

    query.with(["relation1"]).with("relation1");

    expect(query.includes).toStrictEqual(["relation1"]);
  });

  it("clears inclues", () => {
    const query = new Query();

    query.with(["relation1"]).with("relation1");

    query.clearIncludes();

    expect(query.includes).toStrictEqual([]);
  });
});
