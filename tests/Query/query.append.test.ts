import { Query } from "@/Query/query";
import { describe, it, expect } from "vitest";

describe("append", () => {
  it("sets an append from string", () => {
    const query = new Query();

    query.append("attribute");

    expect(query.appends).toStrictEqual(["attribute"]);
  });

  it("sets an append from array", () => {
    const query = new Query();

    query.append(["attribute", "attribute2"]);

    expect(query.appends).toStrictEqual(["attribute", "attribute2"]);
  });

  it("can chain appends", () => {
    const query = new Query();

    query.append(["attribute", "attribute2"]).append("attribute 3");

    expect(query.appends).toStrictEqual(["attribute", "attribute2", "attribute 3"]);
  });

  it("removes duplicate appends", () => {
    const query = new Query();

    query.append(["attribute1"]).append("attribute1");

    expect(query.appends).toStrictEqual(["attribute1"]);
  });

  it("clears appends", () => {
    const query = new Query();

    query.append(["attribute1"]).append("attribute1");

    query.clearAppends();

    expect(query.appends).toStrictEqual([]);
  });
});
