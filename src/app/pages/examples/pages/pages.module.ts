import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PricingComponent } from "./pricing/pricing.component";
import { PagesRoutes } from "./pages.routing";
import { CollapseModule } from "ngx-bootstrap/collapse";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import {ReactiveFormsModule} from "@angular/forms";
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
        BsDropdownModule.forRoot(),
        ProgressbarModule.forRoot(),
        TooltipModule.forRoot(),
        CollapseModule.forRoot(),
        ReactiveFormsModule
    ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    PricingComponent
  ]
})
export class PagesModule {}
