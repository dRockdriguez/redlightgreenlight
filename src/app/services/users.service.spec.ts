import { TestBed } from "@angular/core/testing";
import { User } from "../interfaces/user.interface";
import { UsersService } from "./users.service";

describe("UsersService", () => {
    let service: UsersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [UsersService]
        });
        service = TestBed.inject(UsersService);
    });

    it("should save and get the user", () => {
        const user: User = {
            highScore: 10,
            name: "user",
            points: 0
        };
        service.save(user);
        expect(service.getUser("user")).not.toBeNull();
    });

    it("should get and undefined user", () => {
        expect(service.getUser("undefinedUser")).toBeUndefined();
    });

    it("should update and get the user", () => {
        const user: User = {
            highScore: 10,
            name: "user",
            points: 0
        };
        service.save(user);
        user.points = 20;
        service.save(user);

        const userRecovered = service.getUser("user");
        expect(userRecovered?.points).toBe(20);
    });
});
