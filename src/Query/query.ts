// import { snakeCase } from "../utils/string";

import { arrayUnique } from "@/utils/array";

export type Filters = {
  key: string;
  value: unknown;
};

export type Sort = {
  key: string;
  type: "asc" | "desc";
};

export class Query {
  public pageNumber: number | null = null;
  public pageLimit: number | null = null;
  public filters: Filters[] = [];
  public includes: string[] = [];
  public appends: string[] = [];
  public sorts: Sort[] = [];

  // encode(string: string): string {
  //   const encode = ["+"];
  //   encode.forEach((char: string) => {
  //     string = string.replaceAll(char, encodeURIComponent(char));
  //   });
  //   return string;
  // }

  // toString(): string {
  //   const queries = [this.getPageQuery(), this.getFilters(), this.getSortBy(), this.getIncludes(), this.getAppends()];

  //   const string = queries.filter((query: string | null) => query).join("&");

  //   return string ? `?${this.encode(string)}` : "";
  // }

  // getFilters(): string {
  //   const string = this.filters
  //     .map((filter: Filters) => {
  //       return `filter[${filter.key}]=${filter.value}`;
  //     })
  //     .join("&");

  //   return string ?? "";
  // }

  // getSortBy(): string {
  //   if (this.sort === undefined) {
  //     return "";
  //   }

  //   return `sort=${this.sortDesc ? "" : "-"}${this.sort}`;
  // }

  // getIncludes(): string {
  //   if (this.includes === undefined) {
  //     return "";
  //   }

  //   let string = "include=";

  //   string = string.concat(this.includes.join(","));

  //   return string;
  // }

  // getAppends(): string {
  //   if (this.appends === undefined) {
  //     return "";
  //   }

  //   let string = "append=";

  //   string = string.concat(this.appends.join(","));

  //   return string;
  // }

  // getPageQuery(): string {
  //   let string = "";

  //   if (this.pageNumber) {
  //     string = string.concat(`page[number]=${this.pageNumber}`);
  //   } else {
  //     return "";
  //   }

  //   if (this.pageLimit) {
  //     string = string.concat(`&page[size]=${this.pageLimit}`);
  //   }

  //   return string;
  // }

  // isPaginated(): boolean {
  //   return this.pageNumber != null;
  // }

  page(page: number): this {
    this.pageNumber = page;
    return this;
  }

  perPage(limit: number): this {
    this.pageLimit = limit;
    return this;
  }

  where<T>(property: string, value: T | boolean = true): this {
    this.filters.push({
      key: property,
      value: value,
    });

    return this;
  }

  /**
   * OrderBy (sorts)
   */

  orderBy(property: string, desc = false): this {
    const exists = this.sorts.find((sort) => sort.key === property);

    if (exists) {
      exists.type = desc ? "desc" : "asc";
    } else {
      this.sorts.push({ key: property, type: desc ? "desc" : "asc" });
    }

    return this;
  }

  orderByDesc(property: string): this {
    this.orderBy(property, true);

    return this;
  }

  clearOrderBy(): this {
    this.sorts = [];

    return this;
  }

  /**
   * With (includes)
   */

  with(include: string | string[]): this {
    if (Array.isArray(include)) {
      this.includes.push(...include);
    } else {
      this.includes.push(include);
    }

    this.includes = arrayUnique(this.includes);

    return this;
  }

  clearIncludes(): this {
    this.includes = [];

    return this;
  }

  /**
   * Appends
   */

  append(append: string | string[]): this {
    if (Array.isArray(append)) {
      this.appends.push(...append);
    } else {
      this.appends.push(append);
    }

    this.appends = arrayUnique(this.appends);

    return this;
  }

  clearAppends(): this {
    this.appends = [];

    return this;
  }
}
