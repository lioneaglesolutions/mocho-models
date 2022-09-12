import { Serialiser } from "@/Query/serialiser";

describe("where", () => {
  it("casts true", () => {
    const serialiser = new Serialiser();

    const string = serialiser.cast(true);

    expect(string).toStrictEqual("1");
  });

  it("casts false", () => {
    const serialiser = new Serialiser();

    const string = serialiser.cast(false);

    expect(string).toStrictEqual("0");
  });

  it("casts null", () => {
    const serialiser = new Serialiser();

    const string = serialiser.cast(null);

    expect(string).toStrictEqual("null");
  });

  it("casts date", () => {
    const serialiser = new Serialiser();

    const string = serialiser.cast(new Date("2022-06-09"));

    expect(string).toStrictEqual("2022-06-09T00:00:00.000Z");
  });

  it("casts array", () => {
    const serialiser = new Serialiser();

    const string = serialiser.cast([true, false, null, "string", new Date("2022-06-09")]);

    expect(string).toStrictEqual("1,0,null,string,2022-06-09T00:00:00.000Z");
  });
});
