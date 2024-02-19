import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from "@angular/common";

import {NgModule} from "@angular/core";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {AllAircraftmakersComponent} from "./all-aircraftmakers/all-aircraftmakers.component";
import {NewAircraftmakerComponent} from "./new-aircraftmaker/new-aircraftmaker.component";
import {NewAirbaseComponent} from "../airbases/new-airbase/new-airbase.component";


export const AircraftMakersRoutes: Routes = [
    {
        path: "",
        children: [
            {
                path: "newAircraftMaker",
                component: NewAircraftmakerComponent
            },
            {
                path: "editAircraftMaker/:id",
                component: NewAirbaseComponent
            },
            {
                path: "allAircraftMakers",
                component: AllAircraftmakersComponent
            }
        ]
    }
];
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AircraftMakersRoutes),
        TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        ReactiveFormsModule,
        BsDatepickerModule,
        AngularMultiSelectModule,
        FormsModule
    ],
    declarations: [
        NewAircraftmakerComponent,
        AllAircraftmakersComponent
    ],
    exports: [
        AllAircraftmakersComponent
    ]
})
export class AircraftMakersModule {}