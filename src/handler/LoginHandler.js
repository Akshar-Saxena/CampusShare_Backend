import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";

const LoginHandler = async (data) => {
    let flag = false;
    let email, username, token;
    const users = await getDocs(collection(db, "users"));
    try {
        users.forEach((element) => {
            if (
                element.data().email == data.email &&
                element.data().password == data.password
            ) {
                flag = true;
                email = element.data().email;
                username = element.data().username;
                token = element.data().id;
            }
        });
    } catch (e) {
        return { message: "Invalid Format" };
    }
    return { email: email, username: username, token: token };
};

export { LoginHandler };
