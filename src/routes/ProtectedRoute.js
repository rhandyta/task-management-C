import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const auth = useSelector((state) => state.user);
    return auth ? <Navigate to="/" replace /> : <Outlet />;
}

export default ProtectedRoute;
