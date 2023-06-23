import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Landing } from "../pages/landing";
import { Allocation } from "../pages/income-alloc/allocation";
import { AccountList } from "../pages/account/account-list";
import { CreateAccount } from "../pages/account/create-account";
import { AssetList } from "../pages/asset/asset-list";
import { ConcludeAssetsValue } from "../pages/asset/conclude-assets-value";
import { CreateAsset } from "../pages/asset/create-asset";
import { SummaryValues } from "../pages/statistics/summary-values";

export const LoggedInRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/allocation">
          <Allocation />
        </Route>
        <Route exact path="/conclude-assets-value">
          <ConcludeAssetsValue />
        </Route>
        <Route exact path="/accounts">
          <AccountList />
        </Route>
        <Route exact path="/accounts/new">
          <CreateAccount />
        </Route>
        <Route exact path="/assets">
          <AssetList />
        </Route>
        <Route exact path="/assets/new">
          <CreateAsset />
        </Route>
        <Route exact path="/statistics">
          <SummaryValues />
        </Route>
      </Switch>
    </Router>
  );
};
