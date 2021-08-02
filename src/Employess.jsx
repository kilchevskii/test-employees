import { useState, useEffect } from "react";
import { Layout, Menu, Tag, Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, createEmployee, removeEmployee } from "..//src/App/redux/actions/actionEmpoyees";
import Demo from "./CreateFormEmploye";
import axios from "axios";
import CreateFormEmploye from "./CreateFormEmploye";
import CreateEmployee from "./CreateEmployee";

function Employess() {
  const employees = useSelector((state) => state.employees.data);
  const [users, setUsers] = useState({});
  const columns = [
    {
      title: "Имя",
      // dataIndex: "first_name",
      // key: "first_name",
      render: (item) => (
        <div>
          <p>{`${item?.first_name} ${item?.last_name}`}</p>
          <Button onClick={() => removeEmploye(item?.id)} className="cross">удалить сотрудника</Button>
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();

  const removeEmploye = (id) => {
    dispatch(removeEmployee(id));
 };
  useEffect(() => {
      dispatch(getEmployees());
  }, [dispatch]);

  return (
    <div className="table">
      {<>
        <Table columns={columns} dataSource={employees} />
        <CreateEmployee />
        </>
      }
    </div>
  );
}

export default Employess;
