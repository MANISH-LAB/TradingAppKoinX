import React from 'react';
import { LiaNewspaper } from 'react-icons/lia';

const KeyEvents = ({ bgColor, iconBgColor }) => {
  const divStyle1 = {
    backgroundColor: bgColor,
  };
  const divStyle2 = {
    backgroundColor: iconBgColor,
    padding: '1.5rem',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="rounded-lg w-[45%] flex m-4 p-4" style={divStyle1}>
      <div style={divStyle2}>
        <LiaNewspaper className="rounded-full text-white" size="40px" />
      </div>
      <div className="p-4 m-4">
        <h1 className="font-semibold">
          Aliquip ipsum ea labore ut esse fugiat adipisicing mollit commodo velit excepteur sunt laborum minim.
        </h1>
        <p>
          Id minim officia laboris mollit adipisicing. Ipsum id quis adipisicing et esse occaecat in exercitation
          voluptate sit dolore sint. Cupidatat et laborum adipisicing duis adipisicing non commodo dolor aliqua fugiat
          voluptate.
        </p>
      </div>
    </div>
  );
};

export default KeyEvents;