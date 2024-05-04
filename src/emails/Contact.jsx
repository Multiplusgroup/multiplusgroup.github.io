import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

import config from "../../tailwind.config";

const Contact = ({ formData }) => {
  const {
    nome,
    email,
    telefone,
    celular,
    motivo,
    preferencia,
    horario,
    mensagem,
  } = formData ?? {
    nome: Contact.PreviewProps.nome,
    email: Contact.PreviewProps.email,
    telefone: Contact.PreviewProps.telefone,
    celular: Contact.PreviewProps.celular,
    motivo: Contact.PreviewProps.motivo,
    preferencia: Contact.PreviewProps.preferencia,
    horario: Contact.PreviewProps.horario,
    mensagem: Contact.PreviewProps.mensagem,
  };

  return (
    <Tailwind config={config}>
      <Html lang="pt" className="!m-[1rem] mx-auto flex h-screen items-center">
        <Head />
        <Preview>Solicitação de contato</Preview>
        <Body className=" mx-auto flex !max-w-[800px] rounded-md font-site text-multiBrown shadow-multi ">
          <Container className=" flex !max-w-[800px] rounded-md !bg-multiGreen-xLight dark:!bg-multiGreen-xLight">
            <Section>
              <Img src="../assets/Multiplus_LogoEX.png" />
            </Section>
            <Section className=" px-6 pb-2">
              <h1>Olá consultor MultiplusGroup,</h1>
              <Text className="!m-0 pb-4">
                Você está recebendo este email pois {nome} acabou de enviar uma
                solicitação de contato utilizando o formulário de contato
                existente em seu website.
              </Text>
              <Text className="!m-0">
                Essa mensagem é apenas um resumo das informações postadas no
                formulário, redirecionada para sua caixa de mensagens.
              </Text>
            </Section>
            <Section className="overflow-y-auto border-0 border-t-[2px] border-solid border-y-multiBrown">
              <Row className="m-1">
                <Column>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>Nome: </b>
                    {nome}
                  </Text>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>E-mail: </b>
                    {email}
                  </Text>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>Telefone: </b>
                    {telefone}
                  </Text>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>Celular/WhatsApp: </b>
                    {celular}
                  </Text>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>Motivo: </b>
                    {motivo}
                  </Text>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>Preferência para resposta: </b>
                    {preferencia}
                  </Text>
                  <Text className="!m-0 flex flex-col px-4 pb-2 sm:flex-row sm:gap-2">
                    <b>Melhor horário para resposta: </b>
                    {horario}
                  </Text>
                  <Text className="m-0 flex gap-2 px-4 pb-0">
                    <b>Detalhes da mensagem:</b>
                  </Text>
                  {mensagem.split("\n").map((line, i) => {
                    return (
                      <Text key={i} className="m-0 flex gap-2 px-4 pb-0">
                        {line}
                      </Text>
                    );
                  })}
                </Column>
              </Row>
            </Section>
            <Section className="m-0 flex items-center justify-center rounded-b-md bg-multiBrown p-5 text-center text-xs text-multiGray-light/50">
              <p>Por favor, não responder a esse email.</p>
              <p>
                {`© 2024-${new Date().getFullYear()} | MultiplusGroup | www.multiplusgroup.com.br`}
              </p>
              <a
                href="{unsubscribe:https://api.elasticemail.com/contact/subscribe?version=2&pID=23945de0-aff4-4b5a-83f5-0a693cdd7afd}"
                className="hidden"
              >
                Unsubscribe
              </a>
            </Section>
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};

Contact.PreviewProps = {
  nome: "Alan Turing",
  email: "alan.turing@email.com",
  telefone: "(11) 1111-1111",
  celular: "(11) 9 1111- 1111",
  motivo: "Dúvidas",
  preferencia: "WhatsApp",
  horario: "Horário Comercial",
  mensagem:
    "Gostaria de obter informações mais detalhadas sobre cotações.\nEstou tentando fazer uma cotação mas me parece que o link não está funcionando.\nObrigado!\n\nAlan",
};

export default Contact;
