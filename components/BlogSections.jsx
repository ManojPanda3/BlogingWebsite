import Button from "./Buttons";
import { blogSections,blogs } from "@/constants";
import DropDown from "./DropDown";
import BlogCard from "./BlogCard";

const BlogSections = () => {
  return (
    <section id="blog-section" className="mt-16 w-full flex flex-col md:items-center animate-fadeAppear delay-200 transition-opacity">
      <div className="md:w-[90%] mt-2 flex justify-between md:gap-10 max-md:flex-col">
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
      <div className="grid grid-cols-fit gap-[2rem] md:p-20" name="blogs">
        {blogs.map((elm,index)=>{
          return <BlogCard coverImage={elm.coverImage} key={elm.name+"-"+index} profileImage={elm.profilePic} views={elm.views} likes={elm.likes} title={elm.title} userName={elm.name} />
        })}
      </div>
    </section>
  );
};

export default BlogSections;
