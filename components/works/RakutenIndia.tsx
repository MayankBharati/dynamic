import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Apple = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Backend Intern
        <span className="text-textGreen tracking-wide">@Rakuten India</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Oct 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built a Microservice from scratch that provides Mobile Test Automation support for Rakuten SixthSense (SixthSense is a SaaS platform that enables users to build codeless test automation on the fly).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Integration with various Mobile Stack services which includes Kobiton and Browserstack.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Skills : Android Native, Java, Spring Microservices, Selenium, Appium.
        </li>
      </ul>
    </motion.div>
  );
};

export default Apple;
