import {Routes} from "@angular/router";
import {NewAirbaseComponent} from "./new-airbase/new-airbase.component";
import {AllAirbasesComponent} from "./all-airbases/all-airbases.component";

export const AirbasesRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "newAirbase",
                component: NewAirbaseComponent
            },
            {
                path: "allAirbases",
                component: AllAirbasesComponent
            }
        ]
    }
];