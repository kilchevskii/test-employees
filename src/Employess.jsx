import { useState, useEffect } from "react";
import { Layout, Menu, Tag, Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, createEmployee, removeEmployee } from "..//src/App/redux/actions/actionEmpoyees";
import axios from "axios";

function Employess() {
  const employees = useSelector((state) => state.employees.data.data);
  const [users, setUsers] = useState({});
  const columns = [
    {
      title: "Имя",
      // dataIndex: "first_name",
      // key: "first_name",
      render: (item) => (
        <div>
          <p>{`${item.first_name} ${item.last_name}`}</p>
          <Button onClick={() => removeEmploye()} className="cross">удалить сотрудника</Button>
        </div>
      ),
    },
  ];
  const dispatch = useDispatch();
  const addEmploye = (name) => {
    const employ = {
      name,
      id: Date.now(),
    };
    dispatch(createEmployee(name));
  };
  const removeEmploye = (id) => {
    dispatch(removeEmployee(id));
 };
  useEffect(() => {
      dispatch(getEmployees());
  }, [dispatch]);
  console.log(employees);
  return (
    <div className="table">
      {<>
        <Table columns={columns} dataSource={employees} />
        <Button onClick={() => addEmploye(prompt())} className="add-employees">
          Добавить сотрудника
        </Button>
        </>
      }
    </div>
  );
}

export default Employess;
