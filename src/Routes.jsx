import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { WithLayoutRoute } from "./routers";
import AdminLayout from "./layouts/AdminLayout";
import Circlespinner from "./pages/Public/Components/UI/CircleSpinner/CircleSpinner";

//Admin
const EventList = lazy(() => import("./pages/Admin/EventList"));
const AddEvent = lazy(() => import("./pages/Admin/AddEvent"));
const EditEvent = lazy(() => import("./pages/Admin/EditEvent"));
const Homepage = lazy(() => import("./pages/Public/Pages/Homepage/Homepage"));
const Eventpage = lazy(() =>
  import("./pages/Public/Pages/Eventpage/Eventpage")
);
const Admin = lazy(() => import("./pages/Admin/Admin"));
const Routes = () => {
  return (
    <Suspense fallback={<Circlespinner></Circlespinner>}>
      <Router>
        <Switch>
          <WithLayoutRoute
            exact
            path="/admin/cinemas"
            layout={AdminLayout}
            component={EventList}
          />
          <WithLayoutRoute
            exact
            path="/admin/add"
            layout={AdminLayout}
            component={AddEvent}
          />
          <WithLayoutRoute
            exact
            path="/admin/edit"
            layout={AdminLayout}
            component={EditEvent}
          />
          <WithLayoutRoute
            exact
            path="/"
            layout={AdminLayout}
            component={Homepage}
          />
          <WithLayoutRoute
            exact
            path="/eventpage"
            layout={AdminLayout}
            component={Eventpage}
          />
          <WithLayoutRoute
            exact
            path="/eventpage/:id"
            layout={AdminLayout}
            component={Eventpage}
          />
          <WithLayoutRoute
            exact
            path="/Admin"
            layout={AdminLayout}
            component={Admin}
          />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
