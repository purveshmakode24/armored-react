import { Button } from 'primereact/button';
import React from 'react';
import { useAdminContext } from '../../context';

type CountProps = {};

const Count = (props: CountProps) => {
  const { count, setCount, } = useAdminContext();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className="d-flex m-5" style={{ justifyContent: "center" }}>
        <Button onClick={handleIncrement}>+</Button>
        <div className="p-4">{count}</div>
        <Button onClick={handleDecrement}>-</Button>
      </div>
    </>
  );
};

export default Count;