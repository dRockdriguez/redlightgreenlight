import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./pages/welcome/welcome.module").then((m) => m.WelcomeModule)
    },
    {
        path: "game",
        canActivate: [AuthGuardService],
        loadChildren: () => import("./pages/game/game.module").then((m) => m.GameModule)
    },
    {
        path: "**",
        redirectTo: ""
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
