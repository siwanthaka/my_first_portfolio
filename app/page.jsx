import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";



 

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-8">
        {/*text*/}
        <div className="text-center xl:text-left order-2 xl:order-none -mt-10">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-5">
            Hello I'm <br /> <span className="text-accent">Siwanthaka</span>
          </h1>
          <p className="max-w-[500px] mb-6 text-white/80">
            I specialize in creating elegant digital experiences and have strong proficiency in a wide range of programming languages and technologies.
          </p>
          {/* btn and socials*/}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
            variant="outline" 
            size="lg" 
            className="uppercase flex items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 xl:mb-0">
              <Social containerStyles= "flex gap-6" iconStyles= "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
            </div>
          </div>
        </div>
        {/*photo*/}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
};

export default Home;
