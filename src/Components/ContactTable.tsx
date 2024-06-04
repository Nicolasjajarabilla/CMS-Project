import { Contact } from "./Schema/Contact";

type Props = {
  contacts: Contact[];
  onClick: (id: string) => void;
};

function ContactTable({ contacts, onClick }: Props) {
  return (
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Correo</th>
          <th scope="col">Tipo</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((u) => (
          <tr key={u.id} onClick={() => onClick(u.id)}>
            <td>{u.name}</td>
            <td>{u.lastname}</td>
            <td>{u.email}</td>
            <td>{u.type}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ContactTable;
