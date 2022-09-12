import { Serialiser } from "@/Query/serialiser";
import { Query } from "@/Query/query";
import { describe, it, expect } from "vitest";

describe("where", () => {
  it("serialies empty wheres", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("");
  });

  it("serialises a single where", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    query.where("property1", "value1");

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("filter[property1]=value1");
  });

  it("serialises multiple wheres", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    query.where("property1", "value1").where("property2", "value2");

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("filter[property1]=value1&filter[property2]=value2");
  });

  it("serialises a scope", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    query.where("scope");

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("filter[scope]=1");
  });

  it("serialises a value with a space", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    query.where("prop1", "some value");

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("filter[prop1]=some value");
  });

  it("serialises a multi value where", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    query.where("scope", ["val1", "val2", null, 4]);

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("filter[scope]=val1,val2,null,4");
  });

  it("serialises dates", () => {
    const query = new Query();
    const serialiser = new Serialiser(query);

    query.where("scope", new Date("2022-05-09"));

    const string = serialiser.getFilters();

    expect(string).toStrictEqual("filter[scope]=2022-05-09T00:00:00.000Z");
  });
});
