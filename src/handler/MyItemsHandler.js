import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";
import bcrypt from "bcryptjs";

const MyItemsHandler = async (data) => {
    try {
        const allBooks = await getDocs(collection(db, "items"));
        const users = await getDocs(collection(db, "users"));
        let token;
        users.forEach((user) => {
            if (bcrypt.compareSync(user.id, data.query)) {
                token = user.id;
            }
        });
        const books = [];
        allBooks.forEach((element) => {
            if (element.data().id == token) {
                books.push(element.data());
            }
        });
        return books;
    } catch (e) {
        return { message: "Error fetching data" };
    }
};

export { MyItemsHandler };
