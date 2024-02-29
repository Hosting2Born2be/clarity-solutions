import "@/public/scss/contacts.scss";
import ContactsHero from "@/src/components/contacts/ContactsHero";
import ContactsLast from "@/src/components/contacts/ContactsLast";


export const metadata = {
  title: "Get in Touch with Clarity Solutions",
  description: "Have a question or need assistance? Feel free to reach out to us through our contact form. Our team is here to help you promptly. Don't forget to explore our FAQ section for quick answers to common queries before reaching out.",
};

export default function Business() {
  return (
    <>
      <ContactsHero/>
      <ContactsLast/>
    </>
  );
}
