import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCd1HPTc1sw2ivOrpAjKtPSERSurlRQ6Oc",
  authDomain: "proyecto-react-freidenberg.firebaseapp.com",
  projectId: "proyecto-react-freidenberg",
  storageBucket: "proyecto-react-freidenberg.appspot.com",
  messagingSenderId: "181490423545",
  appId: "1:181490423545:web:77a152c8300c63ddc23428"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*-....*/
export async function getItems(){
  const productsRef = collection(db, "products")
  const productsSnap = await getDocs(productsRef);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data()};
  });
  return docsData;

}

export async function getSingleItem(idURL){

const docRef = doc(db, "products", idURL);
const docSnap = await getDoc(docRef);

return { id: docSnap.id, ...docSnap.data()}

}

export async function getItemsByCategory(categoryid){
  const productsRef = collection(db, "products")
  const q = query(productsRef, where("category", "==", categoryid ));

  const productsSnap = await getDocs(q);
  const documents = productsSnap.docs;
  const docsData = documents.map((doc) => {
    return { id: doc.id, ...doc.data()};
  });
  return docsData;
}