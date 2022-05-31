import { doc, db, setDoc } from "../firebase";

const addNewUserToDb = async (params) => {
  const userDocRef = doc(db, "users", params.userId);

  await setDoc(userDocRef, {
    fullName: params.fullName,
    phoneNumber: params.phoneNumber,
    company: params.company,
    isAdmin: false,
  });
};

export default addNewUserToDb;
