import "./App.css";

import StatusBar from "./components/StatusBar/StatusBar";
import { Switch, Route } from "react-router-dom";
import AccountCreationRoute from './Routes/AccountCreationRoute';
import BasicDetailsRoute from "./Routes/BasicDetailsRoute";
import SkillsPage from "./Routes/SkillsPage";
import Experience from "./components/Experience/Experience";
import ExperiencePage from "./Routes/ExperiencePage";
import EducationRoute from "./Routes/EducationRoute";
import ReviewRoute from "./Routes/ReviewRoute";
import CompletedPage from "./Routes/CompletedPage";

function App() {
  return (
    <div className="App container">
      <StatusBar />
      <Switch>
        <Route path="/" exact>
          <AccountCreationRoute />
        </Route>
        <Route path="/basic-details" exact>
            <BasicDetailsRoute />
        </Route>
        <Route path="/skills">
            <SkillsPage />
        </Route>
        <Route path="/experience">
          <ExperiencePage />
        </Route>
        <Route path="/education">
          <EducationRoute />
        </Route>
        <Route path="/review">
          <ReviewRoute />
        </Route>
        <Route path="/completed">
          <CompletedPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
