import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { BlueLabel } from "../label/label";

interface ReusableSectionProps {
  title: string;
  subtitle: string;
  backgroundClass: string;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const TopHeader: React.FC<ReusableSectionProps> = ({
  title,
  subtitle,
  backgroundClass,
}) => {
  return (
    <section className={`${backgroundClass} relative`}>
      <div className="px-0 md:px-7 xl:px-0 max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
        <div className="py-24 lg:py-12 grid place grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 min-h-[45vh]">
          {/* LEFT SIDE */}
          <div className="flex items-end lg:items-center justify-center lg:justify-start">
            <div className="content text-center lg:text-start">
              <BlueLabel text={subtitle} />
              <h2 className="Noto mt-4 mb-6 text-4xl md:text-5xl font-medium text-white tracking-normal">
                {title}
              </h2>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="-mt-10 lg:mt-0 flex items-start lg:items-center justify-center lg:justify-end">
            <h2 className="mt-6 flex items-center gap-2 text-left font-normal text-white text-md md:text-lg">
              <Link
                to="/"
                className="flex items-center gap-1 hover:underline hover:underline-offset-4"
              >
                <FaHome />
                Home
              </Link>
              <IoIosArrowForward />
              {title}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopHeader;
