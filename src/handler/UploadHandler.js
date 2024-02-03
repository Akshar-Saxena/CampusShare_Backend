import { addDoc, collection } from "firebase/firestore";
import { db } from "../constants/firebase.js";

const UploadHandler = async (data) => {
    await addDoc(collection(db, "books"), {
        id: data.id,
        title: data.title,
        price: price,
        category: category,
        img: data.link,
        date: data.date,
    });
};

export { UploadHandler };
