import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { message } from "antd";

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const doSignOut = () => {
  return signOutUser(auth);
};

export const handleForgotPassword = (email) => {
  sendPasswordResetEmail(auth, email)
    .then(() => {
      message.success("Password reset email sent. Please check your email.");
    })
    .catch((error) => {
      console.error("Error sending password reset email:", error);
      message.error(
        "Error sending password reset email. Please try again later."
      );
    });
};
