import "@/public/scss/contacts.scss";
import ContactsHero from "@/src/components/contacts/ContactsHero";
import ContactsLast from "@/src/components/contacts/ContactsLast";


export const metadata = {
  title: "Business Accounts",
};

export default function Business() {
  return (
    <>
      <ContactsHero/>
      <ContactsLast/>
    </>
  );
}
