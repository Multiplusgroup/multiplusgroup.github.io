import { horarioOpts, meioOpts, motivoOpts } from "@constants/selectOptions";
import { z } from "zod";

const msgLimit = 500;

const getValues = (obj) => {
  const values = Object.values(obj).map((item) => item.valor);
  return values;
};

const looseOptional = (schema) =>
  z.preprocess((value) => {
    return value === null || (typeof value === "string" && value === "")
      ? undefined
      : value;
  }, schema.optional());

const motivos = getValues(motivoOpts);
const horarios = getValues(horarioOpts);
const meios = getValues(meioOpts);

const meioContatoSchema = z
  .string()
  .nonempty("Por favor, escolha o meio de contato")
  .refine((v) => meios.includes(v), "Por favor, escolha o meio de contato");
const motivoSchema = z
  .string()
  .nonempty("Por favor, escolha o motivo de contato")
  .refine((v) => motivos.includes(v), "Por favor, escolha o motivo de contato");
const horarioSchema = z
  .string()
  .nonempty("Por favor, escolha o horário de contato")
  .refine(
    (v) => horarios.includes(v),
    "Por favor, escolha melhor horário para contato",
  );

const contatoFormSchema = z
  .object({
    nome: z.string().nonempty("Por favor, entre com seu nome"),
    email: looseOptional(z.string().email("Por favor, entre um e-mail válido")),
    telefone: looseOptional(
      z.string().min(14, "Por favor, entre com um telefone válido"),
    ),
    whatsapp: looseOptional(
      z.string().min(16, "Por favor, entre com um celular válido"),
    ),
    meioContato: meioContatoSchema,
    motivo: motivoSchema,
    horario: horarioSchema,
    mensagem: z
      .string()
      .nonempty("Por favor, entre sua mensagem")
      .max(
        msgLimit,
        `Sua mensagem nao pode conter mais que ${msgLimit} caracteres`,
      ),
    termos: z
      .boolean()
      .refine((value) => value === true, "Por favor, aceite os termos"),
  })
  .superRefine((v, c) => {
    if (v.meioContato === "E-mail" && !v.email) {
      c.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Por favor, informe seu e-mail",
        path: ["email"],
      });
    }
    if (v.meioContato === "Telefone" && !v.telefone) {
      c.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Por favor, informe seu telefone",
        path: ["telefone"],
      });
    }
    if (v.meioContato === "WhatsApp" && !v.whatsapp) {
      c.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Por favor, informe seu celular",
        path: ["whatsapp"],
      });
    }
  });

export { msgLimit };
export default contatoFormSchema;
