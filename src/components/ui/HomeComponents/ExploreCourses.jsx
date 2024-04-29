// Icon
import { IconExploreCourses } from "../../icons/IconExploreCourses";

// Image
import image from "../../../assets/exploreImageJob.png";

import CategoryItem from "./CategoryItem";

export const ExploreCourses = () => {
  return (
    <div className="ExploreCourses relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:px-[15px] max-sm:py-[30px] bg-[#222222]">
      <div className="container max-w-[1400px] m-auto flex gap-6 justify-between items-start max-md:flex-col max-md:gap-[50px] max-md:items-start">
        <div className="imageInfo flex flex-col items-start gap-[20px] ">
          <div className="img relative max-w-[480px] h-[250px] rounded-[20px] overflow-hidden">
            <div className="icon absolute bottom-0">
              <IconExploreCourses />
            </div>
            <img src={image} alt="" className="w-full h-full object-cover" />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#D5FF40]">
              Explore 3000+ Free
            </h2>
            <h3 className="text-2xl font-[400] text-[#fff]">Online Courses</h3>
          </div>

          <p className="text-[#777] max-w-[400px]">
            Explore the fundamentals of starting and managing a business, from
            developing a business plan to implementing effective marketing
            strategies
          </p>
        </div>

        <div className="category grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:gap-[30px]">
          <CategoryItem
            headerText="Business"
            contentText="Delve into the essential elements of entrepreneurship and business management.
             Learn how to craft a solid business plan, navigate financial strategies
              and execute impactful marketing campaigns. Explore the dynamics of market analysis,
               customer engagement, and sustainable growth 
               strategies to succeed in the competitive business landscape"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />

          <CategoryItem
            headerText="Technology & IT"
            contentText="Discover the latest innovations and trends in the world of technology and IT.
             From mastering coding languages to understanding cybersecurity essentials, 
             dive into a comprehensive journey that equips you with the skills needed to 
             thrive in today's digital landscape."
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />

          <CategoryItem
            headerText="Creative Arts"
            contentText="Unleash your creativity and passion for the arts.
             Dive into the world of visual design, music, 
             filmmaking, and more. Discover techniques for expressing yourself 
             through various mediums and learn about the history and evolution of art forms. Develop 
             your skills and artistic vision to pursue a fulfilling career in the vibrant realm of creative arts"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          />

          <CategoryItem
            headerText="Language Learning"
            contentText="Embark on a rewarding journey of language acquisition and cultural discovery.
             Master new languages, expand your linguistic abilities, and enhance your global communication skills.
              Dive into immersive language courses that cover grammar, vocabulary, pronunciation, 
              and cultural nuances. 
            Explore diverse cultures and connect with people around the world through the power of language learning."
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
};
