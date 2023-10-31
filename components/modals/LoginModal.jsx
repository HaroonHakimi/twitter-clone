import { auth } from '@/firebase'
import { openLoginModal, closeLoginModal } from "@/redux/modalSlice";
import Modal from "@mui/material/Modal";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

export default function LoginModal() {
  const isOpen = useSelector((state) => state.modals.loginModalOpen);
  const dispatch = useDispatch();

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSignIn()
  {
    await signInWithEmailAndPassword(auth, email, password)
  }

  async function handleGuestSignIn()
  {
    await signInWithEmailAndPassword(auth, 'guest11100928@gmail.com', '123456')
  }

  return (
    <>
      <button
        className="text-white border border-white 
        w-[160px] h-[40px] rounded-full hover:bg-[#cbd2d7] hover:text-black
        "
        onClick={() => dispatch(openLoginModal())}
      >
        Log In
      </button>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
        className="flex justify-center items-center"
      >
        <div
          className="w-[90%] h-[600px] bg-black text-white 
        md:w-[550px] md:h-[600px] border border-gray700 rounded-lg
        flex justify-center mt-8
        "
        >
          <div className="w-[90%] mt-8 flex flex-col">
            
            <h1 className="mt-4 font-bold text-4xl">Sign in to your Account</h1>

           
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
            onClick={handleSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Sign in
            </button>
            <h1 className="text-center mt-4 font-bold text-lg mt-8 ">or</h1>

            <button 
            onClick={handleGuestSignIn}
            className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-4">
              Sign In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
