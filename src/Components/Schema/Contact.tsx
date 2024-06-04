import { z } from "zod";

export const ObjectTypeOption = [
  "Familia",
  "Trabajo",
  "Amistad",
  "otros",
] as const;
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El campo del nombre es obligatorio" })
    .min(3, { message: "La longitud minima es de 3." }),
  lastname: z
    .string()
    .min(1, { message: "El campo del apellido es obligatorio" })
    .min(3, { message: "La longitud minima es de 3." }),
  email: z
    .string()
    .min(1, { message: "El campo del correo es obligatorio" })
    .email("El tipo de dato no es correcto"),
  type: z.enum(ObjectTypeOption, {
    errorMap: () => ({ message: "Seleccione tipo" }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
