import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpCode,
  HttpStatus,
  HttpException,
} from "@nestjs/common";

import { SearchService } from "../services/search.service";

@Controller("searches")
export class SearchesController {
  constructor(private searchService: SearchService) {}

  @Get("")
  @HttpCode(HttpStatus.OK)
  getSearches() {
    return this.searchService.findAll();
  }

  @Get("/:id")
  getSearchById(@Param("id") id: string) {
    return this.searchService.findById(id);
  }

  @Post("")
  createSearch(@Body() payload: any) {
    return {
      status: "ok",
      message: "Search created successfully",
      body: payload,
    };
  }

  @Put("/:id")
  updateSearch(@Param("id") id: string, @Body() payload: any) {
    return {
      status: "ok",
      searchId: id,
      update: payload,
    };
  }

  @Delete("/:id")
  deleteSearch(@Param("id") id: string) {
    return {
      status: "ok",
      searchId: id,
    };
  }
}
