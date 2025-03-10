import React from "react";
import { SectionHeading } from "../section_components/SectionHeading";
import { BlogSectionComponent } from "../section_components/BlogSectionComponent";

export const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      path: "/images/sectionImages/Blog-img.png",
      altName: "Blog-Image",
      blogName: "Get the best night's sleep of your life at these nine hotels",
      poster: "ADMIN",
    },
    {
      id: 2,
      path: "/images/sectionImages/Blog-img.png",
      altName: "Blog-Image",
      blogName: "Get the best night's sleep of your life at these nine hotels",
      poster: "ADMIN",
    },
    {
      id: 3,
      path: "/images/sectionImages/Blog-img.png",
      altName: "Blog-Image",
      blogName: "Get the best night's sleep of your life at these nine hotels",
      poster: "ADMIN",
    },
  ];
  return (
    <div className="container mx-auto m-4">
      <SectionHeading
        mainHeading={"Blogs"}
        subHeading={"Inspiring Your Next Journey"}
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3  gap-x-4">
        {blogs.map((blog) => (
          <BlogSectionComponent
            key={blog.id}
            path={blog.path}
            blogName={blog.blogName}
            altName={blog.altName}
            poster={blog.poster}
            date={new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        ))}
      </div>
    </div>
  );
};
