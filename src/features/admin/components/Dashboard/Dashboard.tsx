import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { AppContext } from '../../../../AppContext';

type DashboardProps = {};

const Dashboard = (props: DashboardProps) => {
  const { count, setCount } = useContext(AppContext);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h4>Dashboard</h4>
      <div className="d-flex m-5" style={{ justifyContent: "center" }}>
        <Button onClick={handleIncrement}>+</Button>
        <div className="p-4">{count}</div>
        <Button onClick={handleDecrement}>-</Button>
      </div>
    </>
  );
};

export default Dashboard;