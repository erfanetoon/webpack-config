import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "true" : "false"}
    </footer>
  );
};

export default Footer;
