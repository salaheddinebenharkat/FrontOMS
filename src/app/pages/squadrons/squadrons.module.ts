import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import {SquadronsRoutes} from "./squadrons.routing";
import {NgModule} from "@angular/core";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NewSQuadronComponent} from "./new-squadron/new-squadron.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {AngularMultiSelectModule} from "angular2-multiselect-dropdown";
import {AllSquadronsComponent} from "./all-squadrons/all-squadrons.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(SquadronsRoutes),
        TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        ReactiveFormsModule,
        BsDatepickerModule,
        AngularMultiSelectModule,
        FormsModule
    ],
    declarations: [
        NewSQuadronComponent,
        AllSquadronsComponent
    ],
    exports: [
        NewSQuadronComponent
    ]
})
export class SquadronsModule {}