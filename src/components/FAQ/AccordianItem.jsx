import { FaPlus, FaMinus } from "react-icons/fa";

const AccordionItem = ({ id, title, content, activeItem, setActiveItem }) => {
  const isOpen = activeItem === id;

  const toggleAccordion = () => {
    setActiveItem(isOpen ? null : id);
  };

  return (
    <div className="text-black text-left">
      <button
        className="group relative flex w-full items-center rounded-t-[15px] border-0 py-4 text-left text-base transition hover:z-[2] focus:z-[3] focus:outline-none"
        type="button"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
        aria-controls={id}
      >
        <span className="mr-7 h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out cursor-pointer text-[#6B63FF]">
          {isOpen ? <FaMinus /> : <FaPlus />}
        </span>
        <p className="lg:font-bold">{title}</p>
      </button>
      <div
        id={id}
        className={`transition-max-h duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
        aria-labelledby={id}
      >
        <div className="px-11 py-4 bg-[#EEF9FF]">
          <strong className="text-black font-semibold">{content}</strong>
          <button className="px-5 py-2 bg-[#6B63FF] block mt-5 text-white rounded-full">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
