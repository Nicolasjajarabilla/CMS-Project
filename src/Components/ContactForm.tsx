import { FormProvider, useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import { Contact, ObjectTypeOption, contactSchema } from "./Schema/Contact";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "./Select";

type Props = {
  onSubmit: (contact: Contact) => void;
};

function ContactForm({ onSubmit }: Props) {
  const metodos = useForm<Contact>({
    resolver: zodResolver(contactSchema),
  });
  return (
    <FormProvider {...metodos}>
      <form onSubmit={metodos.handleSubmit(onSubmit)}>
        <Input name="name">Nombre</Input>
        <Input name="lastname">Apellido</Input>
        <Input name="email">Correo</Input>
        <Select
          name="type"
          label="Tipo"
          defaultMessage="-- Selecciona tipo --"
          options={ObjectTypeOption}
        />
        <Button type="submit">Enviar</Button>
        <Button onClick={() => metodos.reset()} variante="secondary">
          Limpiar
        </Button>
      </form>
    </FormProvider>
  );
}

export default ContactForm;
