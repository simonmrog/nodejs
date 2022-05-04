import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { SearchesController } from "./controllers/search.controller";
import { SearchService } from "./services/search.service";

@Module({
  imports: [],
  controllers: [AppController, SearchesController],
  providers: [AppService, SearchService],
})
export class AppModule {}
