import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const CasualAcademics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
      Academics Quantitative Backtesting
        <span className="text-textGreen tracking-wide">@Casual Academics</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
      May 2023 - July 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developing market-neutral, medium frequency alphas based on macroeconomic trends backed by academic research.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Applying machine learning algorithms such as Regression, PCA, K-Means for building profitable strategies out of the signals. Establish parameters and develop system framework, including assessing and developing benchmark and rules-based execution strategies.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Skills - Quantitative Finance, Financial Data, Data Science, Algorithmic Trading, Statistics, Futures Trading, Machine Learning, Quantitative Research, Python, C++.
        </li>
      </ul>
    </motion.div>
  );
};

export default CasualAcademics;
