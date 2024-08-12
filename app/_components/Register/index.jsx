"use client";
import React, { useEffect, useState, useRef } from "react";
import { Steps } from "antd";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import TeamTicket from "@/components/TeamTicket";
import TicketPopup from "@/components/TicketPopup";
import EmailTemplate from "../EmailTemplate/EmailTemplate";
import { Storage } from "@/app/firebase";
import ReactDOMServer from "react-dom/server";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateDoc } from "firebase/firestore";

function jsx2html(element) {
	return ReactDOMServer.renderToString(element);
}

let stepData = {
  step1: { teamName: null, link: null },
  step2: {
    name: null,
    email: null,
    contact: null,
    uniID: null,
    academicYear: null,
    faculty: null,
    img: null,
    imgUrl: null,
  },
  step3: {
    name: null,
    email: null,
    contact: null,
    uniID: null,
    academicYear: null,
    faculty: null,
    img: null,
    imgUrl: null,
  },
  step4: {
    name: null,
    email: null,
    contact: null,
    uniID: null,
    academicYear: null,
    faculty: null,
    img: null,
    imgUrl: null,
  },
  step5: {
    name: null,
    email: null,
    contact: null,
    uniID: null,
    academicYear: null,
    faculty: null,
    img: null,
    imgUrl: null,
  },
};

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

async function sendEmail(to, subject, body) {
	let response = await fetch(process.env.NEXT_PUBLIC_EMAIL_ENDPOINT, {
		method: "post",
		body: JSON.stringify({
			email: to,
			subject: subject,
			body: body,
		}),
	});

	if (response.ok) {
		return await response.json();
	}

	throw new Error(`Email sending failed with code ${response.status}`);
}

const Register = () => {
  const [current, setCurrent] = useState(0);

  const setStepData = (step, data) => {
    stepData[step] = data;
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const [showTicket, setShowTicket] = useState(false);
  const [ticketData, setTicketData] = useState({});
  const addedDoc = useRef();

  const onSubmitComplete = ([finalData,docRef]) => {
    setTicketData({ team: finalData, display: false, isTeam: true });
    setShowTicket(true)
    addedDoc.current = { ref:docRef, ...finalData };
  };

  const onClose = () => {
    setTicketData((prev) => ({ ...prev, display: false }));
    setTimeout(() => setShowTicket(false), 500)
  };

  const generateFileName = () => {
    return (
      new Date().getTime() +
      "-" +
      Math.floor(Math.random() * 1000000 + 1) +
      ".jpg"
    );
  };

  const updateTicket = async (ref, ticket_url) => {
    await updateDoc(ref, { ticket_url });
  };
  
  const dataURItoBlob = (dataURI) => {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    let byteString = atob(dataURI.split(",")[1]);
  
    // separate out the mime component
    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
  
    // write the bytes of the string to an ArrayBuffer
    let ab = new ArrayBuffer(byteString.length);
  
    // create a view into the buffer
    let ia = new Uint8Array(ab);
  
    // set the bytes of the buffer to the correct values
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
  
    // write the ArrayBuffer to a blob, and you're done
    let blob = new Blob([ab], { type: mimeString });
    return blob;
  };
  

  const saveTicket = async (image_string) => {
    let fileName = generateFileName();
    const storageRef = ref(Storage, `/ticket-images-2024/${fileName}`);
    let snapshot = await uploadBytes(storageRef, dataURItoBlob(image_string));
    return await getDownloadURL(snapshot.ref);
  };
  

  const onRender = async (dataURL) => {
    try {
      console.log("rendering...")
      let url = await saveTicket(dataURL);
      console.log("rendering2...")
      let str = jsx2html(<EmailTemplate image={url} />);
      
      await updateTicket(addedDoc.current.ref, url);
      const teamInfo = { ...addedDoc.current }

      for(let i = 1; i <= 4; i++) {
        if(`member0${i}` in teamInfo){
          let member = teamInfo[`member0${i}`];
          console.log("member ",member)
          try {
            await sendEmail(
              member.email,
              "Mini hackathon awareness session",
              str
            );
          } catch (error) {
            console.error(error)
            console.log("Registration success, but email sending failed");
          }
        }
      }

      setTicketData((prev) => ({ ...prev,onRender:null, display: true }));
    }catch(e) {
      console.log("=-=-=",e)
    }
  }

  return (
    <main className="">
      {showTicket ? (
        <TicketPopup
          onClose={onClose}
          onRender={onRender}
          {...ticketData}
        />
      ) : null}
      <div className="mx-20 my-20 px-20">
        <h2 className="text-xl lg:text-2xl my-10">Register Your Team</h2>
        <div>
          <Steps current={current} size="small" items={stepItems} />
        </div>
        <div className="my-20  step-body">
          {current == 0 && (
            <Step1
              stepData={stepData.step1}
              next={next}
              setHook={setStepData}
            />
          )}
          {current == 1 && (
            <Step2
              stepData={stepData.step2}
              next={next}
              setHook={setStepData}
              BackHook={prev}
            />
          )}
          {current == 2 && (
            <Step3
              stepData={stepData.step3}
              next={next}
              setHook={setStepData}
              BackHook={prev}
            />
          )}
          {current == 3 && (
            <Step4
              stepData={stepData.step4}
              next={next}
              setHook={setStepData}
              BackHook={prev}
            />
          )}
          {current == 4 && (
            <Step5
              stepData={stepData.step5}
              next={next}
              setHook={setStepData}
              BackHook={prev}
            />
          )}
          {current == 5 && (
            <Step6
              teamData={stepData}
              next={next}
              onSubmitComplete={onSubmitComplete}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Register;
