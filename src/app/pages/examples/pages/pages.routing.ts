import { Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { PricingComponent } from "./pricing/pricing.component";
import { LoginComponent } from "./login/login.component";

export const PagesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "pricing",
        component: PricingComponent
      }
    ]
  }
];
