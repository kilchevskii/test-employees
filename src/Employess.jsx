import { useState, useEffect } from "react";
import { Layout, Menu, Tag, Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "..//src/App/redux/actions/actionEmpoyees";
import axios from "axios";

function Employess() {
  const { data: employees } = useSelector((state) => state.employees.data);
  const [users, setUsers] = useState({});
  const columns = [
    {
      title: "Имя",
      dataIndex: "first_name",
      key: "first_name",
      render: (item) => (
        <div>
          <p>{`${item.first_name} ${item.last_name}`}</p>
          <Button className="cross">удалить сотрудника</Button>
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
    dispatch({ type: "ADD_EMPLOYEE" });
  };

  useEffect(() => {
    const loadData = async () => {
      dispatch(getEmployees());
      // const result = await axios("https://reqres.in/api/users?per_page=12");
      // setUsers(result.data.data);
      // console.log(users);
    };
    loadData();
  }, []);

  return (
    <div className="table">
      {<>
        <Table columns={columns} dataSource={employees ? employees : ''} />
        <Button onClick={() => addEmploye(prompt())} className="add-employees">
          Добавить сотрудника
        </Button>
        </>
      }
    </div>
  );
}

export default Employess;
