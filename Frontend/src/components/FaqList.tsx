import { useEffect, useState } from "react";
import axios from "axios";
import type { Faq } from "../types/Faq";
import FaqCard from "./FAQCard";

const FaqList: React.FC = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    const fetchFaqs = async () => {
      const res = await axios.get("https://eclypse-backend-5li2.onrender.com/api/faqs");
      setFaqs(res.data.data);
    };
    fetchFaqs();
  }, []);

  return (
    <section className="flex flex-col gap-6 p-8 bg-black">
      <h2 className="text-2xl text-white font-bold mb-4">Frequently Asked Questions</h2>
      {faqs.map(faq => (
        <FaqCard key={faq.id} faq={faq} />
      ))}
    </section>
  );
};

export default FaqList;
