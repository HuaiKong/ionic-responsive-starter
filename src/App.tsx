import { IonApp, setupIonicReact } from "@ionic/react";
import { AppRouter } from "./router";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
// import "@ionic/react/css/display.css";
// import "@ionic/react/css/flex-utils.css";
// import "@ionic/react/css/float-elements.css";
// import "@ionic/react/css/padding.css";
// import "@ionic/react/css/text-alignment.css";
// import "@ionic/react/css/text-transformation.css";

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */
// import "@ionic/react/css/palettes/dark.always.css";
// import "@ionic/react/css/palettes/dark.class.css";
import "@ionic/react/css/palettes/dark.system.css";

/* Theme variables */
import "./styles/index.css";
import "./styles/variables.css";

setupIonicReact({
  mode: "ios",
});

const App: React.FC = () => (
  <IonApp>
    <AppRouter />
  </IonApp>
);

export default App;
