import "./ScrollTop.css";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      className="scroll-btn"
      onClick={scrollTop}
    >
      <FaArrowUp />
    </button>
  );
}

export default ScrollTop;