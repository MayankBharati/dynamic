import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Amazon from "./works/Amazon";
import RakutenIndia from "./works/RakutenIndia";
import Academic from "./works/Academic";
import CasualAcademics from "./works/CasualAcademics";
import IIIC from "./works/IIIC";

const Experience = () => {
  const [workCasualAcademics, setWorkCasualAcademics] = useState(true);
  const [workAcademic, setWorkAcademic] = useState(false);
  const [workRakutenIndia, setWorkRakutenIndia] = useState(false);
  const [workIIIC, setWorkIIIC] = useState(false);
  const [workAmazon, setWorkAmazon] = useState(false);

  const handleCasualAcademics = () => {
    setWorkCasualAcademics(true);
    setWorkAcademic(false);
    setWorkRakutenIndia(false);
    setWorkIIIC(false);
    setWorkAmazon(false);
  };

  const handleAcademic = () => {
    setWorkCasualAcademics(false);
    setWorkAcademic(true);
    setWorkRakutenIndia(false);
    setWorkIIIC(false);
    setWorkAmazon(false);
  };

  const handleRakutenIndia = () => {
    setWorkCasualAcademics(false);
    setWorkAcademic(false);
    setWorkRakutenIndia(true);
    setWorkIIIC(false);
    setWorkAmazon(false);
  };
  const handleIIIC = () => {
    setWorkCasualAcademics(false);
    setWorkAcademic(false);
    setWorkRakutenIndia(false);
    setWorkIIIC(true);
    setWorkAmazon(false);
  };
  // const handleAmazon = () => {
  //   setWorkCasualAcademics(false);
  //   setWorkAcademic(false);
  //   setWorkRakutenIndia(false);
  //   setWorkIIIC(false);
  //   setWorkAmazon(true);
  // };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleCasualAcademics}
            className={`${
              workCasualAcademics
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Casual Academics
          </li>
          <li
            onClick={handleAcademic}
            className={`${
              workAcademic
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Academic
          </li>
          <li
            onClick={handleRakutenIndia}
            className={`${
              workRakutenIndia
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Rakuten India
          </li>
          <li
            onClick={handleIIIC}
            className={`${
              workIIIC
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            IIIC Incubation Center
          </li>
          {/* <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Amazon
          </li> */}
        </ul>
        {workCasualAcademics && <CasualAcademics />}
        {workAcademic && <Academic />}
        {workRakutenIndia && <RakutenIndia />}
        {workIIIC && <IIIC />}
        {/* {workAmazon && <Amazon />} */}
      </div>
    </section>
  );
};

export default Experience;
