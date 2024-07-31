import React, { useState } from "react";

interface FAQ {
  id: string;
  question: string;
  answer: string;
}

interface AccordionItemProps {
  question: string;
  answer: string;
  id: string;
  isOpen: boolean;
  onClick: () => void;
}
const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  id,
  isOpen,
  onClick,
}) => {
  return (
    <div data-accordion-component="Accordion" className="accordion">
      <div data-accordion-component="AccordionItem" className="accordion__item">
        <div
          data-accordion-component="AccordionItemHeading"
          role="heading"
          className="accordion__heading"
          aria-level={3}
        >
          <div
            className="accordion__button"
            id={`accordion__heading-${id}`}
            aria-disabled="false"
            aria-expanded={isOpen}
            aria-controls={`accordion__panel-${id}`}
            role="button"
            tabIndex={0}
            data-accordion-component="AccordionItemButton"
            onClick={onClick}
          >
            <span className="sc-3fe70aef-4 itKTcX">{question}</span>
          </div>
        </div>
        <div
          data-accordion-component="AccordionItemPanel"
          className="accordion__panel"
          id={`accordion__panel-${id}`}
          hidden={!isOpen}
        >
          <div className="sc-3fe70aef-5 dasqAp">{answer}</div>
        </div>
      </div>
    </div>
  );
};
function Benifit() {
  const faqs: FAQ[] = [
    {
      id: "1",
      question:
        "What is the difference between timeshare and shared ownership?",
      answer:
        "Unlike timeshares, NOT A HOTEL's shared ownership allows you to own the property. You have access to your property year-round and can book stays through the app at your convenience.",
    },
    {
      id: "2",
      question:
        "What is the difference between timeshare and shared ownership?",
      answer:
        "Unlike timeshares, NOT A HOTEL's shared ownership allows you to own the property. You have access to your property year-round and can book stays through the app at your convenience.",
    },
    {
      id: "3",
      question:
        "What is the difference between timeshare and shared ownership?",
      answer:
        "Unlike timeshares, NOT A HOTEL's shared ownership allows you to own the property. You have access to your property year-round and can book stays through the app at your convenience.",
    },
    {
      id: "4",
      question:
        "What is the difference between timeshare and shared ownership?",
      answer:
        "Unlike timeshares, NOT A HOTEL's shared ownership allows you to own the property. You have access to your property year-round and can book stays through the app at your convenience.",
    },
    {
      id: "5",
      question:
        "What is the difference between timeshare and shared ownership?",
      answer:
        "Unlike timeshares, NOT A HOTEL's shared ownership allows you to own the property. You have access to your property year-round and can book stays through the app at your convenience.",
    },
  ];

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const handleAccordionClick = (id: string) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <>
      <div className="sc-3fe70aef-0 hFaPso">
        <div
          data-scroll="normal"
          className="sc-3fe70aef-1 fqYhdD"
          style={{ opacity: 1, transform: "translate(0px, 0px)" }}
        >
          <h3 className="sc-3fe70aef-2 bNgcSK">Lợi ích cộng sinh</h3>
          <div className="sc-3fe70aef-3 eFElyr">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItemId === faq.id}
                onClick={() => handleAccordionClick(faq.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Benifit;
