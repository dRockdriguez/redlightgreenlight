import { Injectable } from "@angular/core";
import { User } from "../interfaces/user.interface";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    save(user: User) {
        const usersStored = localStorage.getItem("users");
        if (usersStored) {
            const users = JSON.parse(usersStored) as User[];
            const usersFiltered = users.filter((u) => u.name != user.name);
            localStorage.setItem("users", JSON.stringify([...usersFiltered, user]));
        } else {
            localStorage.setItem("users", JSON.stringify([user]));
        }
    }

    getUser(name: string): User | undefined {
        const usersStored = localStorage.getItem("users");
        if (usersStored) {
            const users = JSON.parse(usersStored) as User[];
            const user = users.find((u) => u.name === name);
            return user;
        }
        return undefined;
    }
}
