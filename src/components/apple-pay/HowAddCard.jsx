import Image from "next/image";
import React from "react";

export const HowAddCard = () => {
  const data = [
    {
      title: "On iPhone",
      img: "/images/apple-pay/iphone.png",
      description: [
        "Go to Settings and open the <b>Wallet & Apple Pay</b> section.",
        "Tap <b>“Add Credit or Debit Card”</b>.",
        "Follow the on-screen instructions to add your <b>Clarity Solutions card</b> to Apple Pay.",
      ],
    },
    {
      title: "On Apple Watch",
      img: "/images/apple-pay/apple-watch.png",
      description: [
        "Open the <b>Apple Watch</b> app on your iPhone.",
        "Go to <b>Wallet & Apple Pay.</b>",
        "Tap <b>“Add Credit or Debit Card”</b> and follow the instructions.",
      ],
    },
    {
      title: "In the Clarity Solutions account",
      img: "/images/apple-pay/account.png",
      description: [
        "Open the <b>Clarity Solutions account.</b>",
        "Go to <b>My Cards</b> and tap <b>“Add to Apple Wallet”</b>.",
        "Follow the steps to complete the setup.",
      ],
    },
  ];

  return (
    <section className="how-add-card">
      <div className="_container">
        <div className="how-add-card__body">
          <h2 className="wow fadeInUp">How to Add Your Card to Apple Pay</h2>
          {data.map((item, index) => (
            <div className="how-add-card__item wow fadeInUp" key={index}>
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={500}
                className="how-add-card__img"
              />
              <div>
                <h3>{item.title}</h3>
                <ul>
                  {item.description.map((item, index) => (
                    <li
                      key={index}
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
