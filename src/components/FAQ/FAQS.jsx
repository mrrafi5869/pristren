import React, { useState } from 'react';
import AccordionItem from './AccordianItem';

const FAQS = () => {
    const [activeItem, setActiveItem] = useState(null);
    return (
        <div className="w-full lg:w-[798px] mx-auto h-[600px] lg:h-[900px] py-5 lg:py-[150px] px-5 lg:px-[60px]">
        <h4 className="text-[#F70942] font-semibold mb-3">FAQS</h4>
        <h1 className="text-2xl lg:text-3xl font-bold tracking-tighter mb-10">
          Have Some Questions
        </h1>
        <div>
          <AccordionItem
            id="collapseOne"
            title="Why this term?"
            content="Start building your brand equity with the strategic one. Creative has been focusing on project management. your brand equity with the strategic one."
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <AccordionItem
            id="collapseTwo"
            title="When to use accordion components ?"
            content="If you are accused of committing a crime, you will need the very best criminal defense attorneys in Fresno. We are especially skilled."
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <AccordionItem
            id="collapseThree"
            title="How can it be defined ?"
            content="If you are accused of committing a crime, you will need the very best criminal defense attorneys in Fresno. We are especially skilled."
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
          <AccordionItem
            id="collapseFour"
            title="Don't be hesitate"
            content="If you are accused of committing a crime, you will need the very best criminal defense attorneys in Fresno. We are especially skilled."
            activeItem={activeItem}
            setActiveItem={setActiveItem}
          />
        </div>
      </div>
    );
};

export default FAQS;