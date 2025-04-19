"use client";

import { useState } from "react";
import { Plus, FileQuestionIcon, Replace, ComputerIcon} from "lucide-react";

const AccordionItem = ({ icon, title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg intersect-once intersect:motion-preset-slide-up motion-delay-300 bg-gray-50 border border-gray-100 mb-4 overflow-hidden">
      <button
        className="flex w-full items-center cursor-pointer justify-between py-5 px-4 text-left transition-colors duration-300 ease-in-out hover:text-black group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-gray-800 text-sm sm:text-base font-medium group-hover:text-black transition-colors duration-300">{title}</span>
        </div>
        <Plus
          className={`h-5 w-5 text-gray-400 transition-transform duration-300 ease-in-out group-hover:text-black ${
            isOpen ? "rotate-45 transform text-black" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-5 px-4" : "max-h-0"
        }`}
      >
        <div className="text-gray-600 pl-9">{children}</div>
      </div>
    </div>
  );
};

export const MinimalistAccordion = () => {
  return (
    <div className="max-w-3xl px-5 mx-auto">
      <AccordionItem
        icon={<FileQuestionIcon className="h-5 w-5 flex items-center justify-center" />}
        title="What kind of legal documents can I upload"
      >
        <p>You can upload anything—from rental agreements and service contracts to offer letters and privacy policies. If it&apos;s got legal jargon, we&apos;ve got you covered.</p>
      </AccordionItem>
      
      <AccordionItem
        icon={<Replace className="h-5 w-5 flex items-center justify-center" />}
        title="Is this app a replacement for a lawyer?"
      >
        <p>Nope! Our AI gives you a clear explanation, not legal advice. It&apos;s perfect for understanding what you're signing, but for critical decisions, you should always consult a lawyer.</p>
      </AccordionItem>
      
      <AccordionItem
        icon={<div className="h-5 w-5 flex items-center justify-center"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg></div>}
        title="Is my uploaded document safe and private?"
      >
        <p>Yes, 100%. We don&apos;t store or share your documents. Everything runs securely, and your files are deleted once processed.</p>
      </AccordionItem>
      
      <AccordionItem
        icon={<ComputerIcon className="h-5 w-5 flex items-center justify-center" />}
        title="How is this different from using ChatGPT directly?"
      >
        <p>Great question! Unlike general chat models, our app is fine-tuned for legal document analysis. It understands structure, highlights key clauses, and simplifies language specifically for contracts and legal text.</p>
      </AccordionItem>
      
      <AccordionItem
        icon={<FileQuestionIcon className="h-5 w-5 flex items-center justify-center" />}
        title="What if I don&apos;t understand a part of the explanation?"
      >
        <p>Just ask! You can chat with the AI in real-time to clarify anything. Whether it&apos;s a tricky term or a confusing clause, the AI will break it down even further.</p>
      </AccordionItem>
      
    </div>
  );
};