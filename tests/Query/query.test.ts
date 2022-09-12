import { Query } from "@/Query/query";

describe("query", () => {
  it("instantiates new query", () => {
    const query = new Query();

    expect(query).toBeInstanceOf(Query);
  });

  it("sets the page number", () => {
    const query = new Query();

    query.page(5);

    expect(query.pageNumber).toBe(5);
  });

  it("sets the page limit", () => {
    const query = new Query();

    query.perPage(15);

    expect(query.pageLimit).toBe(15);
  });
});
