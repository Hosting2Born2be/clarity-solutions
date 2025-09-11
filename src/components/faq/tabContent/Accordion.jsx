"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRef = useRef([]);
  const videoRefs = useRef([]);

  useEffect(() => {
    setOpenIndex(null);
    contentRef.current = contentRef.current.slice(0, items.length);
  }, [items]);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);

    if (items[index].video) {
      videoRefs.current.forEach((videoRef, i) => {
        if (videoRef && i !== index) {
          videoRef.pause();
          videoRef.currentTime = 0;
        }
      });

      if (videoRefs.current[index]) {
        videoRefs.current[index].play();
      }
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          data-id={openIndex}
          data-key={item.id}
          key={index}
          className={`accordion__item ${openIndex === index ? "opened" : ""}`}
          onClick={() => toggleItem(index)}
        >
          <div className="accordion__title">
            <h4 className="accordion__title-text">{item.title}</h4>
            <span></span>
            <img src="/images/faq/arrow.svg" alt="^" />
          </div>
          <div
            className="accordion__content"
            ref={(el) => (contentRef.current[index] = el)}
            style={{
              maxHeight:
                openIndex === index
                  ? `${contentRef.current[index]?.scrollHeight}px`
                  : "0",
              overflow: "hidden",
              transition: "max-height 0.3s ease",
            }}
          >
            {item.content && (
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            )}
            {item.video && (
              <div className="accordion__content-video">
                <div className="accordion__content-video-item">
                  <Image
                    src="/images/activation/iphone.png"
                    alt="Card Activation"
                    width={244}
                    height={512}
                    className="accordion__content-video-item-image"
                  />
                  <video
                    src={item.video}
                    playsInline
                    autoPlay={false}
                    muted
                    loop
                    ref={(el) => (videoRefs.current[index] = el)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
