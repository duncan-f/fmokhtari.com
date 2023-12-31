import { motion } from "framer-motion";

const Section = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    style={{ marginBottom: "10px" }}
  >
    {children}
  </motion.div>
);

export default Section;
