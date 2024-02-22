import React from "react";
import User from "../../components/User/User";
import { useAppSelector } from "../../store/hooks";
import { AuthState } from "../../slices/authSlice.slice";
const UserDetails = () => {
  const { user, role, userEmail, userPhoneNumber, fullName } =
    useAppSelector(AuthState);
  return (
    <div>
      <User
        username={user}
        role={role}
        email={userEmail}
        phone={userPhoneNumber}
        fullName={fullName}
      />
    </div>
  );
};

export default UserDetails;
