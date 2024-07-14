import { bookmarkIcon, likeIcon } from "@/utils";
import Image from "next/image";
import Button from "./Buttons";

const BlogCard = ({
  coverImage,
  profileImage,
  views,
  likes,
  title,
  userName,
}) => {
  return (
    <div className="w-full p-4">
      <div className="relative cover rounded-[1rem] overflow-hidden w-full">
        <img
          src={coverImage}
          alt="CoverImage"
          className="cover-image h-full w-full"
          // height={100}
          // width={100}
        />
        <div className="w-full h-full bg-gradient-to-t hover:opacity-100 transition-opacity duration-500 opacity-0 from-black via-transparent to-black absolute top-0 left-0">
        <div className="flex absolute w-full h-1/3 top-0">
          <Button className="h-2 w-2">{likeIcon}</Button>
          <Button className="h-2 w-2">{bookmarkIcon}</Button>
        </div>
        </div>
      </div>
      <p name="title" className="font-bold text-xl p-2">
        {title}
      </p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img
            src={profileImage}
            alt="profile-pic"
            className="rounded-full w-auto h-12"
            height={100}
            width={100}
          />
          <p className="name">{userName}</p>
        </div>
        <div className="details flex gap-1">
          <i name="likeIcon"></i>
          <p className="likes">{likes}</p>
          <i name="viewsIcon"></i>
          <p className="views">{views}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
