import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactTable from "./ContactTable";
import { Contact } from "./Schema/Contact";

type Props = {};

function CMS({}: Props) {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContacts = (contact: Contact) =>
    setContacts([
      {
        ...contact,
        id: Math.random().toString(),
      },
      ...contacts,
    ]);

  const deleteContacts = (id: string) => {
    setContacts(contacts.filter((c) => c.id != id));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ContactForm onSubmit={addContacts}></ContactForm>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ContactTable
            contacts={contacts}
            onClick={deleteContacts}
          ></ContactTable>
        </div>
      </div>
    </div>
  );
}

export default CMS;
