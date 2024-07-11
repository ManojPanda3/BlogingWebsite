import React from "react";
import Button from "./Buttons";
import { blogSections } from "@/constants";

const BlogSections = () => {
  return (
    <section className="w-full flex flex-col items-center">
      <div className="w-[70%] flex justify-evenly">
        {blogSections.map((elm, index) => (
          <Button className="px-2 rounded-[0.5rem] hover:bg-gray-200 transition-colors duration-200" key={elm + "-" + index}>
            {elm}
          </Button>
        ))}
      </div>
    </section>
  );
};

export default BlogSections;
