import Contact from "@emails/Contact";
import { render } from "@react-email/render";
import { Email } from "smtp-js-mailer";

const host = import.meta.env.VITE_EMAILAPI_HOST;
const port = import.meta.env.VITE_EMAILAPI_PORT;
const user = import.meta.env.VITE_EMAILAPI_USER;
const from = import.meta.env.VITE_EMAILAPI_FROM;
const to = import.meta.env.VITE_EMAILAPI_TO;
const pass = import.meta.env.VITE_EMAILAPI_PASS;

const sendEmail = async ({ data }) => {
  const results = await Email.send({
    Host: host,
    Port: port,
    Username: user,
    Password: pass,
    To: to,
    From: from,
    Subject: `${data.nome} entrou em contato para ${data.motivo} - email redirecionado`,
    Body: await render(<Contact data={data} />),
  });
  return results;
};

export default sendEmail;
