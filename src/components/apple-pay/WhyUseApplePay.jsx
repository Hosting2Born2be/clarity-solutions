import React from "react";

export const WhyUseApplePay = () => {
  const data = [
    {
      title: "Fast",
      description:
        "Make payments in just a tap—whether in stores or online. Apple Pay speeds up your transactions and makes paying easier than ever.",
      icon: "/images/apple-pay/fast.svg",
    },
    {
      title: "Secure",
      description:
        "Your payments are protected with Face ID, Touch ID, or your device passcode. Your card details are never saved, keeping your information safe.",
      icon: "/images/apple-pay/secure.svg",
    },
    {
      title: "Global",
      description:
        "Use Apple Pay at millions of places worldwide. Whether shopping in stores or online, you can access your funds anytime, anywhere.",
      icon: "/images/apple-pay/global.svg",
    },
    {
      title: "Digital",
      description:
        "Your Clarity Solutions debit card is always ready on your iPhone or Apple Watch. No physical card needed—just your phone or watch.",
      icon: "/images/apple-pay/digital.svg",
    },
    {
      title: "Instant",
      description:
        "Track your spending in real-time. Get instant notifications so you can easily manage your budget.",
      icon: "/images/apple-pay/instant.svg",
    },
  ];
  return (
    <section className="why-use-apple-pay">
      <div className="_container">
        <h2 className="wow fadeInUp">
          Why Use Apple Pay with Clarity <br />
          Solutions Card
        </h2>
        <div className="why-use-apple-pay__body">
          {data.map((item, index) => (
            <div className="why-use-apple-pay__item wow fadeInUp" key={index}>
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
