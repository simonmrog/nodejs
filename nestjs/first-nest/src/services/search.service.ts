import { Injectable } from "@nestjs/common";

import { Search } from "../models/search.model";

@Injectable()
export class SearchService {
  private counter = 2;
  private searches: Search[] = [{
    id: "1",
    name: "asdasd"
  }, {
    id: "2",
    name: "agkggkgkgkg"
  }];

  findAll() {
    return this.searches;
  }

  findById(id: string) {
    return this.searches.find(search => search.id === id);
  }

  create(payload: any) {
    const newSearch = {
      id: this.counter++, ...payload
    }
    this.searches.push(newSearch);
    return newSearch;
  }
}
