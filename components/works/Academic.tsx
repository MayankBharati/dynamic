import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
const Academic = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Developer
        <span className="text-textGreen tracking-wide">@Academics</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jan 2022 - May 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developed an easy-to-use wrapper in React and Node.js for Parse/MongoDB to be used internally to allow other
employees to make common queries efficiently without having to interact directly with Parse Dashboard
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented test result visualization allowing for imediate response, data analysis, and increased cross team
accessibilty.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Automated common interactions with the database to speed up common actions such as resetting customer
passwords, setting up new teams, and viewing integration logs more easily
        </li>
      </ul>
    </motion.div>
  );
};

export default Academic;
