import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import {BadgeCheckIcon} from "@heroicons/react/solid"

export default function Trending() {
  return (
    <div className=" hidden lg:flex flex-col mx-7 mt-4">
      <div
        className="flex space-x-3 bg-white bg-opacity-10
            w-[300px] h-[44px] p-3 rounded-3xl"
      >
        <SearchIcon className="w-6 text-gray-600" />
        <input
          className="bg-transparent
                focus:outline-none
                placeholder:text-gray-600"
          placeholder="Search Twitter"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3">
        <h1 className="font-bold text-xl p-3">What's happening</h1>
        <TrendingItems item={"China"} likes={"340k"} />
        <TrendingItems item={"Apple"} likes={"140k"}/>
        <TrendingItems item={"Elon Musk"} likes={"40k"}/>
        <TrendingItems item={"Haroon Hakimi"} likes={"10k"}/>
        <TrendingItems item={"Anime"} likes={"70k"}/>
      </div>

      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3">
      <h1 className="font-bold text-xl p-3">Who to Follow</h1>
        <PeopleToFollow name={"David Bragg"} tag={"davidbragg"} image={"/assets/bragg.png"}/>
        <PeopleToFollow name={"Elon Musk"} tag={"elonmusk"} image={"/assets/kylie.png"}/>
        <PeopleToFollow name={"Kylie Jenner"} tag={"kylie"} image={"/assets/pfp.png"}/>
      </div>
    </div>
  );
}

export function TrendingItems({item, likes})
{
    return (
        <div className="p-3 relative">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">{item}</h1>
          <p className="text-xs text-gray-500">{likes} Tweets</p>
        </div>
    )
}

export function PeopleToFollow({ name, tag, image })
{
    return (
        <>
        <div className="flex justify-between p-3">
            <div className="flex space-x-3">
                <img src={image}
                className="rounded-full w-11 h-11 object-cover"
                />
                <div>
                <div className="flex space-x-1">
                    <h1 className="font-bold">{name}</h1>
                    <BadgeCheckIcon className="w-[18px] text-blue-400"/>
                </div>
                <h1 className="text-[12px] text-gray-500 mt-1">@{tag}</h1>
                </div>
                
            </div>
            <button className="bg-white text-black text-sm w-20 h-8
            rounded-3xl font-bold
            ">
                Follow
            </button>
        </div>
        </>
    )
}