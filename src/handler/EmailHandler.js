import nodemailer from "nodemailer";

const EmailHandler = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "symbiosisswapshop@gmail.com",
            pass: process.env.PASS,
        },
    });
    try {
        let info = await transporter.sendMail({
            from: "symbiosisswapshop@gmail.com",
            to: data.email,
            subject: data.subject,
            text: data.msg,
        });
        return { message: "Sent Successfully" };
    } catch (e) {
        return { message: "Error Sending Email" };
    }
};

export { EmailHandler };
