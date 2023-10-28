import { ChestFL, Drona, QuantTrading } from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/MayankBharati/Chest-Xray-Federated-Learning-"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={ChestFL}
                alt="ChestFL"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Chest X-ray Federated Learning</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
            The Chest X-ray Federated Learning project is a Python-based implementation of federated learning techniques applied to chest X-ray images. It aims to enable collaborative learning across multiple healthcare institutions while preserving data privacy. 
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Python</li>
              <li>Jupyter Notebook</li>
              <li>Pytorch</li>
              {/* <li>Str</li> */}
              {/* <li>Vercel Deployment</li> */}
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/MayankBharati/Chest-Xray-Federated-Learning-"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/WzMtRfzkP-Q"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/MayankBharati/Chest-Xray-Federated-Learning-"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://github.com/MayankBharati/Quant-Trading-Project"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={QuantTrading}
                alt="QuantTrading"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Quant Trading</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
            This project focusing on a quantitative trading strategy utilizing the &quot;Golden Cross&quot; and &quot;Death Cross&quot; principles with Exponential Moving Averages (EMA). This strategy, gaining prominence in recent years, is used by traders to target substantial returns. The project implements and assesses the strategy, comparing its performance to a traditional buy-and-hold approach in the equity, forex, and cryptocurrency markets.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Jupyter Notebook</li>
              <li>Python</li>
              <li>Supervised ML</li>
              <li>Dynamic Time Wrapping</li>
              {/* <li>React Hook Form</li> */}
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/MayankBharati/Quant-Trading-Project"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/49Fx963su1I"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/MayankBharati/Quant-Trading-Project"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://drona-gamma.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={Drona}
                alt="Drona"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Drona</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
            We Build &quot;Drona&quot;, addressing coding challenges in developing countries. Drona has three parts: <br/>
            1. Code Grabber: Snap and upload handwritten code to run it in a compiler. <br/>
            2. Question Bank: Crowdsourced questions for practice, reducing teacher workload. <br/>
            3. Opportunity Notifications: Stay updated on internships, scholarships, and more. <br/>
            Drona simplifies coding education for all.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Android-Native</li>
              <li>Java</li>
              <li>MVVM</li>
              <li>Retrofit</li>
              <li>Jetpack</li>
              <li>Vercel Deployment</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/MayankBharati/Drona"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              {/* <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/fi0nQc25xAw"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a> */}
              <a
                className="hover:text-textGreen duration-300"
                href="https://drona-gamma.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
