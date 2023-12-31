import React from "react";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";

const ToggleTheme: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  const { toggleColorMode } = useColorMode();
  const theme = useColorModeValue("light", "dark");
  const color = useColorModeValue("purple", "orange");
  const icon = useColorModeValue(<FaMoon />, <FaSun />);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={theme}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={color}
          icon={icon}
          onClick={toggleColorMode}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default ToggleTheme;
