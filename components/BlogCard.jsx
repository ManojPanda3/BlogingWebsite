import Image from 'next/image';

const BlogCard = () => {
  return (
    <section className="max-w-[10rem] max-w-[10rem]">
      <div className="cover rounded-[1rem] overflow-hidden">
        <Image src={""} alt="CoverImage" className="cover-image" />
      </div>
      <div>
        <Image src={""} alt="profile-pic" className="" />
        <p className="name">HelloWorld</p>
        <div className="details">
          <i className="likes">100</i>
          <i className="views">200</i>
        </div>
      </div>
    </section>
  );
};

export default BlogCard;
