"use client";
import React, { useEffect, useState, useRef } from "react";
import { Steps } from "antd";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";

let stepData = {
  step1 : { teamName: null, link: null},
  step2 : { name: null, email: null, contact: null, uniID: null, academicYear: null, faculty: null, img: null, imgUrl: null},
  step3 : { name: null, email: null, contact: null, uniID: null, academicYear: null, faculty: null, img: null , imgUrl: null},
  step4 : { name: null, email: null, contact: null, uniID: null, academicYear: null, faculty: null, img: null , imgUrl: null},
  step5 : { name: null, email: null, contact: null, uniID: null, academicYear: null, faculty: null, img: null , imgUrl: null}
}

const stepItems = [
  {
    title: "Team Information",
  },
  {
    title: "Member 1 (Leader)",
  },
  {
    title: "Member 2",
  },
  {
    title: "Member 3",
  },
  {
    title: "Member 4 (Optional)",
  },
  {
    title: "Complete",
  },
];

const Register = () => {
  const [current, setCurrent] = useState(0);

  const setStepData = (step, data) => {
    stepData[step] = data;
  }
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <main className="">
      <div className="mx-20 my-20 px-20">
        <h2 className="text-xl lg:text-2xl my-10">Register Your Team</h2>
        <div>
          <Steps
            current={current}
            size="small"
            items={stepItems}
          />
        </div>
        <div className="my-20  step-body">

        {current == 0 && ( <Step1 stepData={stepData.step1} next={next} setHook= {setStepData}/>)}
        {current == 1 && ( <Step2 stepData={stepData.step2} next={next} setHook= {setStepData} BackHook={prev}/>)}
        {current == 2 && ( <Step3 stepData={stepData.step3} next={next} setHook= {setStepData} BackHook={prev}/>)}
        {current == 3 && ( <Step4 stepData={stepData.step4} next={next} setHook= {setStepData} BackHook={prev}/>)}
        {current == 4 && ( <Step5 stepData={stepData.step5} next={next} setHook= {setStepData} BackHook={prev}/>)}
        {current == 5 && ( <Step6 teamData={stepData} next={next} />)}

        </div>
      </div>
    </main>
  );
};

export default Register;
