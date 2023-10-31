import { closeSignupModal, openSignupModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "@/firebase";
import { useState, useEffect } from "react";
import { setUser } from "@/redux/userSlice";
import { useRouter } from "next/router";

export default function SignupModal() {
  const isOpen = useSelector((state) => state.modals.signupModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()

  async function handleSignup() {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: `./assets/profilePictures/pfp${(Math.ceil(Math.random()*6))}.png`
    })
    router.reload()
  }

  async function handleGuestSignIn()
  {
    await signInWithEmailAndPassword(auth, 'guest11100928@gmail.com', '123456')
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;
      dispatch(
        setUser({
          username: currentUser.email.split("@")[0],
          name: currentUser.displayName,
          email: currentUser.email ,
          uid: currentUser.uid,
          photoUrl: currentUser.photoURL
        })
      );
    });

    return unsubscribe;
  }, []);

  return (
    <>
      <button
        className=" bg-white text-black
                w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7]
                "
        onClick={() => dispatch(openSignupModal())}
      >
        Sign Up
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeSignupModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-black text-white 
        md:w-[550px] md:h-[600px] border border-gray700 rounded-lg
        flex justify-center mt-8
        "
        >
          <div className="w-[90%] mt-8 flex flex-col">
            <button 
            onClick={handleGuestSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="mt-4 font-bold text-4xl">Create Your Account</h1>

            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 mt-8 p-2"
              placeholder="Full Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 mt-8 p-2"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="h-10 rounded-md bg-transparent border border-gray-700 mt-8 p-2"
              placeholder="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={handleSignup}
              className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md
            "
            >
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
