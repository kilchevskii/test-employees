import { useState, useEffect } from "react";
import { Layout, Menu, Tag, Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "..//src/App/redux/actions/actionEmpoyees";
import axios from "axios";

function Employess() {
  const { data: employees } = useSelector((state) => state.employees.data);
  const [dataForDrawer, setDataForDrawer] = useState({});
  const [visible, setVisible] = useState(false);
  const columns = [
    {
      title: "Имя",
      dataIndex: "first_name",
      key: "first_name",
      render: (text, item) => <p>{`${item.first_name} ${item.last_name}`}</p>,
    },
    // {
    //   title: "Модули",
    //   key: "modules",
    //   dataIndex: "modules",
    //   render: (modules) => (
    //     <>
    //       {modules &&
    //         modules.map(({ title, color }) => {
    //           return (
    //             <Tag color={color} key={title}>
    //               {title.toUpperCase()}
    //             </Tag>
    //           );
    //         })}
    //     </>
    //   ),
    // },
    // {
    //   title: "action",
    //   dataIndex: "action",
    //   key: "action",
    //   render: (text, item) => (
    //     <>
    //       <Button
    //         onClick={() => {
    //           setDataForDrawer(item);
    //           setVisible(true);
    //         }}
    //       >
    //         Прогресс
    //       </Button>
    //     </>
    //   ),
    // },
  ];
  console.log(dataForDrawer);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      dispatch(getEmployees());
    };
    loadData();
  }, []);

  return (
    <div className="table">
      <Table columns={columns} dataSource={employees} />
      {/* <ProgressDrawer
        dataForDrawer={dataForDrawer}
        visible={visible}
        setVisible={setVisible}
      /> */}
    </div>
  );
}

export default Employess;
