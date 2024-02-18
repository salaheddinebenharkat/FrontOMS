import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from "@angular/common";

import {NgModule} from "@angular/core";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
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
                path: "editParking/:id",
                component: NewParkingComponent
            },
            {
                path: "allParking",
                component: AllParkingComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ParkingRoutes),
        TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        ReactiveFormsModule,
        BsDatepickerModule,
        AngularMultiSelectModule,
        FormsModule
    ],
    declarations: [
        NewParkingComponent,
        AllParkingComponent
    ],
    exports: [
        AllParkingComponent,
    ]
})
export class ParkingModule {}