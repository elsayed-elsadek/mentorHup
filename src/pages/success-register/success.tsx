
import React from "react";

import { BasicLayout } from "../../components/layout/BasicLayout";
import { Frame } from "../../components/success-com/Frame";
import {NextButton} from "../../components/success-com/NextButton";

const Success: React.FC = () => {
  return (
    <BasicLayout>
      
        <div className="w-full h-full flex justify-center items-center">
          <Frame />
        </div>
        <NextButton className="ml-auto mt-7" />
     
    </BasicLayout>
  );
};

export default Success;
