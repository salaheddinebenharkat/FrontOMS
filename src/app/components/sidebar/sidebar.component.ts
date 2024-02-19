import { Component, OnInit } from "@angular/core";

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  rtlTitle: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  smallTitle?: string;
  rtlTitle: string;
  rtlSmallTitle?: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  smallTitle?: string;
  rtlSmallTitle?: string;
  title?: string;
  rtlTitle: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "tim-icons icon-chart-pie-36",
    rtlTitle: "لوحة القيادة"
  },
  {
    path: "/airbases",
    title: "airbases",
    type: "sub",
    rtlTitle: "  خرائط",
    icontype: "tim-icons icon-square-pin",
    isCollapsed: true,
    collapse: "airbases",
    children: [
      {
        path: "newAirbase",
        rtlTitle: " خرائط جوجل ",
        rtlSmallTitle: "ز ",
        title: "New Airbase",
        type: "link",
        smallTitle: "GM"
      },
      {
        path: "allAirbases",
        rtlTitle: "خريطة كاملة الشاشة ",
        rtlSmallTitle: " وو",
        title: "Airbases List",
        type: "link",
        smallTitle: "FSM"
      }
    ]
  },
  {
    path: "/squadrons",
    title: "squadrons",
    type: "sub",
    rtlTitle: "  خرائط",
    icontype: "tim-icons icon-tag",
    isCollapsed: true,
    collapse: "squadrons",
    children: [
      {
        path: "newSquadron",
        rtlTitle: " خرائط جوجل ",
        rtlSmallTitle: "ز ",
        title: "New Squadron",
        type: "link",
        smallTitle: "GM"
      },
      {
        path: "allSquadrons",
        rtlTitle: "خريطة كاملة الشاشة ",
        rtlSmallTitle: " وو",
        title: "Squadrons List",
        type: "link",
        smallTitle: "FSM"
      }
    ]
  },
  {
    path: "/parking",
    title: "parking",
    type: "sub",
    rtlTitle: "  خرائط",
    icontype: "tim-icons icon-tag",
    isCollapsed: true,
    collapse: "parking",
    children: [
      {
        path: "newParking",
        rtlTitle: " خرائط جوجل ",
        rtlSmallTitle: "ز ",
        title: "New Parking",
        type: "link",
        smallTitle: "GM"
      },
      {
        path: "allParking",
        rtlTitle: "خريطة كاملة الشاشة ",
        rtlSmallTitle: " وو",
        title: "Parking List",
        type: "link",
        smallTitle: "FSM"
      }
    ]
  },
  {
    path: "/aircraftMakers",
    title: "aircraftMakers",
    type: "sub",
    rtlTitle: "  خرائط",
    icontype: "tim-icons icon-settings",
    isCollapsed: true,
    collapse: "aircraftMakers",
    children: [
      {
        path: "newAircraftMaker",
        rtlTitle: " خرائط جوجل ",
        rtlSmallTitle: "ز ",
        title: "New Aircraft Maker",
        type: "link",
        smallTitle: "GM"
      },
      {
        path: "allAircraftMakers",
        rtlTitle: "خريطة كاملة الشاشة ",
        rtlSmallTitle: " وو",
        title: "Aircraft Makers List",
        type: "link",
        smallTitle: "FSM"
      }
    ]
  },
  {
    path: "/widgets",
    title: "Widgets",
    type: "link",
    rtlTitle: "الحاجيات",
    icontype: "tim-icons icon-settings"
  },
  {
    path: "/charts",
    title: "Charts",
    type: "link",
    rtlTitle: "الرسوم البيانية",
    icontype: "tim-icons icon-chart-bar-32"
  },
  {
    path: "/calendar",
    title: "Calendar",
    rtlTitle: "التقويم",
    type: "link",
    icontype: "tim-icons icon-time-alarm"
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
