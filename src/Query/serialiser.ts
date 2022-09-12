import { Filters, Query } from "./query";

export class Serialiser {
  constructor(public query: Query = new Query()) {}

  serialise(): string {
    return "";
  }

  getFilters(): string {
    const string = this.query.filters
      .map((filter: Filters) => {
        return `filter[${filter.key}]=${this.cast(filter.value)}`;
      })
      .join("&");

    return string ?? "";
  }

  cast<T extends unknown>(value: T): string | T {
    if (value === true) {
      return "1";
    }

    if (value === false) {
      return "0";
    }

    if (value === null) {
      return "null";
    }

    if (value instanceof Date) {
      return value.toISOString();
    }

    if (Array.isArray(value)) {
      return value.map((item) => this.cast(item)).join(",");
    }

    return value;
  }
}
