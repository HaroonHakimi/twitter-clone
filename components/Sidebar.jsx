import { auth } from "@/firebase";
import { closeLoginModal, closeSignupModal } from "@/redux/modalSlice";
import { signOutUser } from "@/redux/userSlice";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookOpenIcon,
  ClipboardIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { signOut } from "firebase/auth";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

export default function Sidebar() {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user)

  async function handleSignOut() {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignupModal())
    dispatch(closeLoginModal())

  }

  return (
    <div className=" hidden h-full  sm:flex flex-col fixed xl:ml-24">
      <nav className=" h-full relative xl:space-y-1.5">
        <div className="xl:p-3 p-3 flex xl:justify-start items-center">
          <Image src={"/assets/twitter-logo.png"} width={34} height={34} />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={UserIcon} text={"Profile"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button className="hidden xl:inline bg-[#1d9bf8] rounded-full mt-2 h-[52px] w-[200px] text-lg font-bold">
          Tweet
        </button>
        <div
          onClick={handleSignOut}
          className="hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
        absolute bottom-0 flex justify-center items-center xl:p-3 space-x-3"
        >
          <img
            className="w-10 h-10 rounded-full object-cover"
            src= {user.photoUrl || "/assets/kylie.png"}
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">{user.name}</h1>
            <h1 className="text-gray-500">@{user.username}</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SidebarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex justify-center xl:justify-start items-center text-xl mb-3 space-x-3">
      <Icon className="h-7" />
      <span className=" hidden xl:inline">{text}</span>
    </li>
  );
}
