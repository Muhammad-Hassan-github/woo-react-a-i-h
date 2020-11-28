import React from "react";
import ActionBox from "./ActionsBox";
import CustomerNoteBox from "./CustomerNoteBox";
import CustomersBox from "./CustomersBox";
import CustomTaxBox from "./CustomTaxBox";
import EmailBox from "./EmailBox";

const SmallBoxes = ({propsData}) => {
  return (
    <div>
      <div className="col-xl-12">
        <ActionBox  propsData ={propsData} />
      </div>
      {/* secon table box */}
      <div className="col-xl-12">
        <EmailBox />
      </div>
      {/* 3rd */}
      <div className="col-xl-12">
        <CustomersBox />
      </div>
      {/* 4th */}
      <div className="col-xl-12">
        <CustomerNoteBox />
      </div>
      {/* 5th */}
      <div className="col-xl-12">
        <CustomTaxBox />
      </div>
    </div>
  );
};

export default SmallBoxes;
