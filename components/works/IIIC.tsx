import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const IIIC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Incubate Startups
        <span className="text-textGreen tracking-wide">@Splash</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        July 2021 - Dec 2021
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          We are a unique collaboration and education space designed to foster innovation and entrepreneurship across the country. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          We are committed to growing a collaborative entrepreneurial network by providing a one-stop support system for start-ups and transforming ourselves as a hub for innovation. 
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          We support and nurture startup companies by providing services such as incubation, mentoring, networking opportunities, seed funding, office spaces and rapid prototyping.
        </li>
      </ul>
    </motion.div>
  );
};

export default IIIC;
