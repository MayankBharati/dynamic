import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillBehanceCircle, AiFillCaretRight, AiFillCarryOut, AiFillChrome, AiFillCiCircle, AiFillFileMarkdown, AiFillThunderbolt, AiFillTrademarkCircle } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is Mayank Bharati and I enjoy creating things that
            live on the internet and Quantitative Finance. I got introduced to programming in my freshman year at <a href="https://www.iiita.ac.in/"><span className="text-textGreen">
              Indian Institute of Information Technology, Allahabad
          </span></a> where I completed my Bachelors in Electronics and Coomunications Engineering (2020-2024) with <span className="text-textGreen">8.33 CGPA</span>.
          </p>
          <p>
          I&apos;m a passionate creator who loves to use my coding skills to make a positive impact. When I&apos;m not immersed in the world of technology, I enjoy embarking on culinary adventures, tinkering with electronics, and occasionally indulging in underrated TV series.
          </p>
          <p>
          My commitment to open source projects is unwavering, and I take pleasure in both building and contributing to these initiatives. Teaching and assisting others is a source of joy for me.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              C++/C
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Spring MVC & Maven
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Kafka & Couchbase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Quantitative finance
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Jupyter Notebook
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillCaretRight />
              </span>
              Tailwindcss
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
