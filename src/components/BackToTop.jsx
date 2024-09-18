import { BiArrowToTop } from "react-icons/bi";

const BackToTop = () => {
  return (
    <a
      href="#nav"
      className="fixed top-1/2 transform -translate-y-1/2 right-2 md:right-8 bg-blue-950 text-white font-bold text-2xl p-3 rounded-full shadow-lg shadow-blue-950/50 hover:bg-green-950 transition"
    >
      <BiArrowToTop />
    </a>
  );
};

export default BackToTop;
