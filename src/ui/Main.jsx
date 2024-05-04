import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Main = ({ children, className = "" }) => {
  const { pathname } = useLocation();
  return (
    <motion.main
      className={` ${className}`}
      key={`${pathname}-${Math.random()}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
    >
      {children}
    </motion.main>
  );
};

export default Main;
