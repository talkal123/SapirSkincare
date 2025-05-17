import { FC } from "react";
import SegevPhoto1 from "../../assets/SegevPhoto.avif";
import SegevPhotos2 from "../../assets/SegevPhotos2.avif";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const NotAboutNow: FC = () => {
  return (
    <div>
      <div className="flex flex-col-reverse w-full border md:flex-row md:max-h-[700px] border-b-1 border-b-black">
        <div className="relative md:w-1/2 ">
          <img
            src={SegevPhoto1}
            alt=""
            className="w-full h-full opacity-15 object-cover"
          />
          <div className="flex flex-col gap-5 md:gap-8 absolute top-15 p-1 text-center xl:top-15 xl:p-20 md:p-0">
            <h2
              className="text-white text-3xl font-mono xl:text-5xl md:text-2xl"
              style={{ fontFamily: "Wix Madefor Text sans-serif" }}
            >
              ITS NOT ABOUT HOW YOU LOOK, ITS <br /> ABOUT HOW YOU FEEL
            </h2>
            <div>
              <span className="text-sm text-white">
                SAPIR SKINCARE BEVERLY HILLS
              </span>
            </div>
            <div>
              <span className="text-sm text-white text-center">
                A RENOWNED FACE AND BODY CLINIC IN THE HEART OF <br />
                RODEO DRIVE
              </span>
            </div>
            <div>
              <Link to="/contact">
                <button className="bg-white cursor-pointer text-sm md:text-lg p-2 px-10 rounded-full hover:text-white hover:bg-blue-300 transition-colors duration-300">
                  CONNECT
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-2/2 md:w-1/2 ">
          <img
            src={SegevPhotos2}
            alt=""
            className=" w-full md:h-full md:object-cover"
          />
        </div>
      </div>
      <div className="hidden md:flex p-5 border-t-2 border-b-1 border-black">
        <div className="flex flex-col w-1/3  items-center">
          <h3 className="font-semibold text-2xl">10+</h3>
          <h4 className="font-sans text-sm">Years of Experience</h4>
          <span className="font-light text-xs max-w-55">
            Benefit from over a decade of hands-on expertise in skincare,
            ensuring you receive treatments perfected through years of practice
            and refinement
          </span>
        </div>
        <div className="flex flex-col w-1/3  items-center">
          <h3 className="font-semibold text-2xl">10+</h3>
          <h4 className="font-sans text-sm">Years of Experience</h4>
          <span className="font-light text-xs max-w-55">
            Benefit from over a decade of hands-on expertise in skincare,
            ensuring you receive treatments perfected through years of practice
            and refinement
          </span>
        </div>
        <div className="flex flex-col w-1/3  items-center">
          <h3 className="font-semibold text-2xl">10+</h3>
          <h4 className="font-sans text-sm">Years of Experience</h4>
          <span className="font-light text-xs max-w-55">
            Benefit from over a decade of hands-on expertise in skincare,
            ensuring you receive treatments perfected through years of practice
            and refinement
          </span>
        </div>
      </div>
    </div>
  );
};

export default NotAboutNow;
