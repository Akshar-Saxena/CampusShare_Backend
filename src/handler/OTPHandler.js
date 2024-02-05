import nodemailer from "nodemailer";

const OTPHandler = async (data) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "symbiosisswapshop@gmail.com",
            pass: process.env.PASS,
        },
    });
    try {
        const otp = Math.floor(100000 + Math.random() * 900000);
        let info = await transporter.sendMail({
            from: "symbiosisswapshop@gmail.com",
            to: data.email,
            subject: "Authentication Code: Please Verify Your Account",
            text: `Dear ${data.username},\n\n\
            Thank you for signing up with [Your Company Name]. To verify your email address and complete the registration process, please use the following one-time password (OTP):\n\n\
            Your One-Time Password (OTP): ${otp}\n\n\
            Please enter this OTP in the designated field on our website or application within the next [time frame, e.g., 5 minutes] to confirm your identity and gain access to your account.\n\n\
            If you did not attempt to register for an account with [Your Company Name], please disregard this email. Your account security is important to us, and we recommend not sharing this OTP with anyone.\n\n\
            If you have any questions or need further assistance, please don't hesitate to contact our support team at [support@example.com].\n\n\
            Thank you for choosing [Your Company Name].\n\n\
            Sincerely,\n\n\
            Team Pawsibilities\n\
            Symbiosis SwapShop`,
        });
        return { message: "Sent Successfully", otp: otp };
    } catch (e) {
        return { message: "Error Sending Email" };
    }
};

export { OTPHandler };
