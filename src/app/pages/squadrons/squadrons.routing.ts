import {Routes} from "@angular/router";
import {NewSQuadronComponent} from "./new-squadron/new-squadron.component";
import {AllSquadronsComponent} from "./all-squadrons/all-squadrons.component";

export const SquadronsRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "newSquadron",
                component: NewSQuadronComponent
            },
            {
                path: "allSquadrons",
                component: AllSquadronsComponent
            }
        ]
    }
];