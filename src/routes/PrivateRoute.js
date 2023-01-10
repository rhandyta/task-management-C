import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
    const auth = useSelector((state) => state.user);
    return auth ? <Outlet /> : <Navigate to="/login" replace />;
}

export default PrivateRoute;
