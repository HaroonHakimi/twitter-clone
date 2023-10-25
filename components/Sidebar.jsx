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
} from "@heroicons/react/outline";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className=" h-full hidden sm:flex flex-col fixed xl:ml-24">
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
        <div className="absolute bottom-0">User</div>
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
