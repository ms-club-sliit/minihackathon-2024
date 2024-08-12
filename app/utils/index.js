import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Storage, Db } from "../firebase";
import { doc, setDoc, getDoc, collection } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";

const handleUpload = async (
  file,
  onSuccess,
  onError,
  onProgress,
  setFileList,
  downloadLinkHook
) => {
  if (!file) return;

  const storageRef = ref(
    Storage,
    `profile-image-uploads/${uuidv4() + "_" + file.name}`
  );
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      onProgress({ percent: progress });
    },
    (error) => {
      message.error(`Upload failed: ${error.message}`);
      onError(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        downloadLinkHook(downloadURL);
        onSuccess("Ok");
        setFileList((prevFileList) =>
          prevFileList.map((item) => {
            return {
              ...item,
              status: "done",
              url: downloadURL,
              thumbUrl: downloadURL,
            };
          })
        );
      });
    }
  );
};

const registerTeam = async (teamData) => {

  try {

    console.log(teamData)

    // Pre Process stage
    let preProcess = teamData;

    Object.keys(preProcess).forEach(step => {
      if (preProcess[step].hasOwnProperty('img')) {
        delete preProcess[step].img;
      }

      Object.keys(preProcess[step]).forEach(key => {
        if (preProcess[step][key] === undefined) {
          preProcess[step][key] = null;
        }
      });

    });


    //
    let model = {
      team_name: preProcess.step1.teamname || "",
      team_drive_link: preProcess.step1.link,
      createdAt: new Date().toGMTString(),

      member01: { ...preProcess.step2 },
      member02: { ...preProcess.step3 },
      member03: { ...preProcess.step4 },
      member04: { ...preProcess.step5 },
    };

    console.log(model);

    let documentID = model.team_name.trim();

    const docRef = doc(
      collection(Db, "team_name_2024"),
      documentID
    );

    if (checkTeamExists(documentID)) {
      console.log("Given team name already exists !");
      new Error("Given team name already exists !");
    }

    await setDoc(docRef, model);
    console.log("Team registered successfully!");

    return [model, docRef];
  } catch (error) {
    console.error("Error saving data: ", error);
    new Error("Team registration failed");
  }
};

const checkTeamExists = async (documentID) => {
  try {
    const docRef = doc(Db, "team_name_2024", documentID);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document exists:");
      return true;
    } else {
      console.log("No such document!");
      return false;
    }
  } catch (error) {
    console.error("Error checking document:", error);
    throw new Error("Error checking document");
  }
};


const validateFileUpload = (_, value) => {
  // if (!value || value.length === 0) {
  //   return Promise.reject(new Error("Please upload a profile image."));
  // }
  return Promise.resolve();
};

const validateName = (_, value) => {
  if (!value || value.trim() === "") {
    return Promise.reject(new Error("Name is required."));
  }
  if (value.length < 10) {
    return Promise.reject(
      new Error("Name must be at least 10 characters long.")
    );
  }
  const namePattern = /^[A-Za-z\s]+$/;
  if (!namePattern.test(value)) {
    return Promise.reject(
      new Error("Name must contain only letters and spaces.")
    );
  }
  return Promise.resolve();
};

const validateTeamName = async (_, value) => {
  // if (value) {
  //   const exists = await checkTeamExists(value.trim());
  //   if (exists) {
  //     return Promise.reject(new Error("Team name already exists!"));
  //   }
  // }
  return Promise.resolve();
};

const validateEmail = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("Email is required."));
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(value)) {
    return Promise.reject(new Error("Invalid email format."));
  }
  return Promise.resolve();
};

const validateUniId = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("University ID is required."));
  }
  const uniIdPattern = /^[A-Za-z]{2}\d{8}$/;
  if (!uniIdPattern.test(value)) {
    return Promise.reject(
      new Error(
        "SLIIT ID must be exactly 10 characters long, starting with 2 letters followed by 8 numbers."
      )
    );
  }
  return Promise.resolve();
};

const validateContact = (_, value) => {
  if (!value) {
    return Promise.reject(new Error("Contact number is required."));
  }
  const contactPattern = /^\d{10}$/;
  if (!contactPattern.test(value)) {
    return Promise.reject(
      new Error("Contact number must be exactly 10 digits.")
    );
  }
  return Promise.resolve();
};

const validateURL = (rule, value) => {
  if (value) {
    try {
      new URL(value);
    } catch (e) {
      return Promise.reject(new Error("Invalid URL ! Please enter correct URL"));
    }
  }
  return Promise.resolve();
};

export {
  validateTeamName,
  handleUpload,
  validateFileUpload,
  validateName,
  validateEmail,
  validateUniId,
  validateContact,
  registerTeam,
  checkTeamExists,
  validateURL
};
