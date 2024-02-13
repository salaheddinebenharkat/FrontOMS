import {Routes} from "@angular/router";
import {NewParkingComponent} from "./new-parking/new-parking.component";
import {AllParkingComponent} from "./all-parking/all-parking.component";

export const ParkingRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "newParking",
                component: NewParkingComponent
            },
            {
                path: "allParking",
                component: AllParkingComponent
            }
        ]
    }
];