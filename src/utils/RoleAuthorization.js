import React from "react";
import { useAppSelector } from "../store/hooks";
import { AuthState } from "../slices/authSlice.slice";

export const AppRoles = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  CUSTOMER: "customer",
};

const RoleAuthorization = ({ children, employee, customer, admin }) => {
  const roles = [
    ...(employee ? [AppRoles.EMPLOYEE] : []),
    ...(customer ? [AppRoles.CUSTOMER] : []),
    ...(admin ? [AppRoles.ADMIN] : []),
  ];

  const { role } = useAppSelector(AuthState);
  return <>{roles.includes(role) ? children : null}</>;
};

export default RoleAuthorization;
