import { AsideLayout } from "@/layout";
import Tab1 from "@/pages/Tab1";
import Tab2 from "@/pages/Tab2";
import Tab3 from "@/pages/Tab3";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

const navItems = [
  { id: "tab1", label: "Tab 1", href: "/tab1", icon: triangle },
  { id: "tab2", label: "Tab 2", href: "/tab2", icon: ellipse },
  { id: "tab3", label: "Tab 3", href: "/tab3", icon: square },
];

export const RootTabs = () => {
  return (
    <AsideLayout items={navItems}>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="md:hidden">
          {navItems.map(({ id, label, href, icon }) => (
            <IonTabButton tab={id} href={href} key={id}>
              <IonIcon aria-hidden="true" icon={icon} />
              <IonLabel>{label}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </AsideLayout>
  );
};
