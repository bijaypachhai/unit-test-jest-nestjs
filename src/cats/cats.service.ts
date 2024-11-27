export class CatsService {
    private readonly cats: string[] = ["ap1", "ap2"];

    findAll(): string[] {
        return this.cats;
    }

    findOne(prefix: string): string {
        return `with prefix: ${prefix}`;
    }
}