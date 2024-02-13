import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import {NgModule} from "@angular/core";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {NewParkingComponent} from "./new-parking/new-parking.component";
import {ParkingRoutes} from "./parking.routing";
import {AllParkingComponent} from "./all-parking/all-parking.component";

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
        AllParkingComponent,
        NewParkingComponent
    ],
    exports: [
        AllParkingComponent,
    ]
})
export class ParkingModule {}