import {RouterModule, Routes} from "@angular/router";
import { CommonModule } from "@angular/common";
import {NewAirbaseComponent} from "./new-airbase/new-airbase.component";
import {NgModule} from "@angular/core";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {CollapseModule} from "ngx-bootstrap/collapse";
import {ReactiveFormsModule} from "@angular/forms";
import {AllAirbasesComponent} from "./all-airbases/all-airbases.component";
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

export const AirbasesRoutes: Routes = [
    {
        path: "",//airbase
        children: [
            {
                path: "newAirbase",//new
                component: NewAirbaseComponent
            },
            {
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

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AirbasesRoutes),
        TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        ReactiveFormsModule,
        BsDatepickerModule,
        NgxDatatableModule
    ],
    declarations: [
        AllAirbasesComponent,
        NewAirbaseComponent
    ],
    exports: [
        NewAirbaseComponent
    ]
})
export class AirbasesModule { }