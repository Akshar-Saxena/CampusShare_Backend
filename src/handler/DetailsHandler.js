import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";

let flag = false;
let email, username;
const DetailsHandler = async (data) => {
    const users = await getDocs(collection(db, "users"));
    users.forEach((element) => {
        if (element.data().id == data.id) {
            flag = true;
            email = element.data().email;
            username = element.data().username;
        }
    });
    if (flag) {
        return { email: email, username: username };
    } else {
        return { message: "Details not found" };
    }
};

export { DetailsHandler };
