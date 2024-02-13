import {Routes} from "@angular/router";
import {NewAircraftmakerComponent} from "./new-aircraftmaker/new-aircraftmaker.component";
import {AllAircraftmakersComponent} from "./all-aircraftmakers/all-aircraftmakers.component";

export const AircraftMakersRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "newAircraftMaker",
                component: NewAircraftmakerComponent
            },
            {
                path: "allAircraftMakers",
                component: AllAircraftmakersComponent
            }
        ]
    }
];