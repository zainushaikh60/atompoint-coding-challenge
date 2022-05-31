import { data } from "../data";
import { doc, db, collection, addDoc } from "../firebase";

const addSecurityChecklistDocumentToDb = (params) => {
  const securityChecklistDocument = data.map((x) => {
    return { ...x, isChecked: false };
  });

  const docRef = doc(db, "users", params.userId);
  const colRef = collection(docRef, "security_checklist");

  securityChecklistDocument.map(
    async (document) => await addDoc(colRef, document)
  );
};

export default addSecurityChecklistDocumentToDb;
