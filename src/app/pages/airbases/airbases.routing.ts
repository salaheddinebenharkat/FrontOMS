import {Routes} from "@angular/router";
import {NewAirbaseComponent} from "./new-airbase/new-airbase.component";
import {AllAirbasesComponent} from "./all-airbases/all-airbases.component";

export const AirbasesRoutes: Routes = [
    {
        path: "",//airbase
        children: [
            {
                path: "newAirbase",//new
                component: NewAirbaseComponent
            }, {
                path: "editAirbase/:id",
                component: NewAirbaseComponent
            },
            {
                path: "allAirbases",//all
                component: AllAirbasesComponent
            }
        ]
    }
];