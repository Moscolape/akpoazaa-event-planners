import Lottie from "lottie-react";
import confettiAnimation from "../utils/Animation - 1744283286259.json";
import { useNavigate } from "react-router-dom";

type SuccessModalProps = {
  text: string;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ text }) => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-[#000000c8] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="bg-white sm:w-[35%] w-4/5 m-auto rounded-lg py-10 animate-fadeDownFast max-h-[90vh] overflow-y-auto relative text-center font-Montserrat">
        <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-20">
          <Lottie
            animationData={confettiAnimation}
            loop={true}
            autoplay
            style={{ height: 200 }}
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            🎉 Thank you!
          </h2>
          <p>{text}</p>
        </div>
        <button
          onClick={() => {
            navigate("/", { replace: true });
          }}
          className="mt-6 px-6 py-3 bg-[#e2ba65] hover:bg-[#b58825] font-bold rounded transition cursor-pointer"
        >
          Okay
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
