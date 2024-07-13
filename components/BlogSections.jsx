import Button from "./Buttons";
import { blogSections } from "@/constants";
import DropDown from "./DropDown";

const BlogSections = () => {
  return (
    <section className="w-full flex flex-col md:items-center">
      <div className="md:w-[85%] mt-2 flex justify-between md:gap-10 max-md:flex-col">
        <div className="flex md:gap-10 max-md:gap-1">
          {blogSections.map((elm, index) => (
            <Button
              className="md:px-5 md:py-2 max-md:px-2.5 max-md:py-1 font-semibold rounded-[0.5rem] hover:bg-gray-300 transition-colors duration-200"
              key={elm + "-" + index}
            >
              {elm}
            </Button>
          ))}
        </div>
        <DropDown />
      </div>
    </section>
  );
};

export default BlogSections;
