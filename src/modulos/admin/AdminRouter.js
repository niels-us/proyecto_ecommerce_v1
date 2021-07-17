import React from "react";
import { Switch, Route } from "react-router-dom";
import AdminInfo from "./pages/AdminInfo";
import AdminHeader from "./components/AdminHeader";
import { useDispatch } from "react-redux";
import { getVentas } from "../../redux/actions/ventasAction";
import AdminTable from "./pages/AdminTable";

const AdminRouter = () => {
  const dispatch = useDispatch();
  dispatch(getVentas());
  return (
    <>
      <AdminHeader />
      <Switch>
        <Route path="/admin/info" component={AdminInfo} />
        <Route path="/admin/table" component={AdminTable} />
      </Switch>
    </>
  );
};

export default AdminRouter;
