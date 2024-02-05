import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";

const MyItemsHandler = async (data) => {
    try {
        const allBooks = await getDocs(collection(db, "items"));
        const books = [];
        allBooks.forEach((element) => {
            if (element.data().id == data.query) {
                books.push(element.data());
            }
        });
        return books;
    } catch (e) {
        return { message: "Error fetching data" };
    }
};

export { MyItemsHandler };
