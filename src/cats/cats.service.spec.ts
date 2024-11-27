import { Test, TestingModule } from "@nestjs/testing";
import { CatsService } from "./cats.service";

describe("CatsService", () => {
    let service: CatsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CatsService]
        }).compile();

        service = module.get<CatsService>(CatsService);
    });

    it("should return list of strings", () => {
        const result = service.findAll();

        expect(result).toEqual(["ap1", "ap2"]);
    });
})