import React, { useState } from "react";
import "./Dashboard.css";
import Widget from "../../components/Widget/Widget";
import { useAppSelector } from "../../store/hooks";
import { customersState } from "../../slices/customerSlice.slice";
import { binsState } from "../../slices/binsSlice.slice";
import { employeesState } from "../../slices/employeeSlice";
import { adminsState } from "../../slices/adminSlice.slice";
import BinContainer from "../../components/Containers/BinContainer/BinContainer";
import Sidebar from "../../components/Sidebar/Sidebar";
import AdminsContainer from "../../components/Containers/AdminsContainer/AdminsContainer";
import LoadingAndNullHandler from "../../components/LoadingAndNullHandler/LoadingAndNullHandler";
import CustomerContainer from "../../components/Containers/CustomerContainer/CustomerContainer";
import EmployeesContainer from "../../components/Containers/EmployeesContainer/EmployeesContainer";

const Dashboard = () => {
  const [currentTab, setTab] = useState(0);
  const { customers, loading: customerLoading } =
    useAppSelector(customersState);
  const { admins, loading: adminLoading } = useAppSelector(adminsState);
  const { binsData, loading: binsLoading } = useAppSelector(binsState);
  const { employees, loading: EmployeeLoading } =
    useAppSelector(employeesState);
  const getTabContent = () => {
    const returned = {
      0: <AdminsContainer data={admins} />,
      1: <CustomerContainer data={customers} />,
      2: <EmployeesContainer data={employees}/>,
      3: <BinContainer data={binsData} />,
    };
    return returned[currentTab];
  };
  // if (customerLoading || adminLoading || binsLoading || EmployeeLoading) {
  //   return <LoadingAndNullHandler type="loading" />;
  // }
  return (
    <>
      <div className="widgets mb-2">
        <Widget
          type={"Admin"}
          icon={"bi-speedometer text-primary"}
          data={admins.length}
          setTab={setTab}
          tab={0}
        />
        <Widget
          type={"Customers"}
          icon={"bi-file-earmark-person-fill text-danger"}
          data={customers.length}
          setTab={setTab}
          tab={1}
        />
        <Widget
          type={"Employees"}
          icon={"bi-person-vcard text-secondary"}
          data={employees.length}
          setTab={setTab}
          tab={2}
        />
        <Widget
          type={"Bins"}
          icon={"bi-trash text-success"}
          data={binsData.length}
          setTab={setTab}
          tab={3}
        />
      </div>
      <div className="home">
        <Sidebar setTab={setTab} tab={currentTab} />
        <div className="homeContainer mb-3">{getTabContent()}</div>
      </div>
    </>
  );
};

export default Dashboard;
