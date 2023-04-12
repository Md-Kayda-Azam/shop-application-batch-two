import React from "react";
import { motion } from "framer-motion";
import TopHeader from "../TopHeader/TopHeader";
import HeaderNav from "../HeaderNav/HeaderNav";
import TopNavHeader from "../TopNavHeader/TopNavHeader";
import "./Header.scss";

const Header = () => {
  const animateProps = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };
  return (
    <>
      <motion.div {...animateProps}>
        <TopHeader />
        <TopNavHeader />
        <HeaderNav />
      </motion.div>
    </>
  );
};

export default Header;
