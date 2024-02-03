import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../constants/firebase.js";
import { v4 } from "uuid";

let flag = true;
const SignUpHandler = async (data) => {
    let token = v4();
    const users = await getDocs(collection(db, "users"));
    users.forEach((element) => {
        if (element.data().email == data.email) {
            flag = false;
        }
    });
    if (flag) {
        await addDoc(collection(db, "users"), {
            id: token,
            username: data.username,
            email: data.email,
            password: data.password,
        });
        return {
            email: data.email,
            username: data.username,
            token: token,
        };
    } else {
        return { message: "Email already exists" };
    }
};

export { SignUpHandler };