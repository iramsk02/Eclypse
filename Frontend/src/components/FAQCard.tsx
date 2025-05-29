// import type { Faq } from "../types/Faq";

// interface FaqCardProps {
//   faq: Faq;
// }

// const FaqCard: React.FC<FaqCardProps> = ({ faq }) => (
//   <div className="w-full bg-black text-white border-b border-gray-700 py-4">
//     <h3 className="text-lg font-semibold">{faq.question}</h3>
//     <p className="text-sm text-gray-300 mt-2">{faq.answer}</p>
//   </div>
// );

// export default FaqCard;
import React, { useState } from "react";
import type { Faq } from "../types/Faq";

interface FaqCardProps {
  faq: Faq;
}

const FaqCard: React.FC<FaqCardProps> = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-black text-white border-b border-gray-700 py-4 cursor-pointer">
      <h3 
        className="text-lg font-semibold flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {faq.question}
        <span className="ml-2 text-gray-400">
          {isOpen ? "▲" : "▼"}
        </span>
      </h3>
      {isOpen && (
        <p className="text-sm text-gray-300 mt-2">
          {faq.answer}
        </p>
      )}
    </div>
  );
};

export default FaqCard;
