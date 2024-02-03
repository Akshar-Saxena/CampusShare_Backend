import { collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";

let flag = false;
let email, username, token;
const LoginHandler = async (data) => {
    const users = await getDocs(collection(db, "users"));
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
    return flag
        ? { email: email, username: username, token: token }
        : { message: "Invalid Username or Password" };
};

export { LoginHandler };
