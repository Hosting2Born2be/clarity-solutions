"use client";
import { useState, useRef, useEffect } from "react";

const Accordion = ({items}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRef = useRef([]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    setOpenIndex(null);
    contentRef.current = contentRef.current.slice(0, items.length);
  }, [items]);

  return (
    <div className="accordion">
      {items.map((item) => (
        <div
          key={item.id}
          className={`accordion__item ${openIndex === item.id ? "opened" : ""}`}
          onClick={() => toggleItem(item.id)}
        >
          <div className="accordion__title">
            <h4 className="accordion__title-text">{item.title}</h4>
            <span></span>
            <img src="/images/faq/arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[item.id] = el)}
            style={{
              maxHeight:
                openIndex === item.id
                  ? `${contentRef.current[item.id]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
            dangerouslySetInnerHTML={{ __html: item.content }}
          >
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
