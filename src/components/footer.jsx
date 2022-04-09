import { useState } from "react";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <footer onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "true" : "false"}

      <img src="../../public/images/persepolis.png" />
    </footer>
  );
};

export default Footer;
