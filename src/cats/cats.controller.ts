import { Controller, Get } from "@nestjs/common";
import { CatsService } from "./cats.service";

@Controller("cats")
export class CatsController {
    constructor(private catsService: CatsService) {}

    @Get()
    async findAll(): Promise<string[]> {
        return this.catsService.findAll();
    }
}