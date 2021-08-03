import { useEffect } from "react";
import {  Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees, removeEmployee } from "../../redux/actions/actionEmpoyees";
import CreateEmployee from "./CreateEmployee";

function Employess() {
  const employees = useSelector((state) => state.employees.data);
  const columns = [
    {
      title: "Имя",
      key: 'first_name',
      render: (item) => (
        <div>
          <p>{`${item?.first_name}`}</p>
        </div>
      ),
    },
    {
      title: "Фамилия",
      key: 'last_name',
      render: (item) => (
        <div>
          <p>{`${item?.last_name}`}</p>
        </div>
      ),
    },
    {
      title: "Почта",
      key: 'email',
      render: (item) => (
        <div>
          <p>{`${item?.email}`}</p>
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
        <Table  columns={columns} dataSource={employees} />
        <CreateEmployee />
        </>
      }
    </div>
  );
}

export default Employess;
