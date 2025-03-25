import config, { logo } from "@constants/emailConfig";
import emailPreview from "@constants/emailPreview";
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import Heading from "@ui/Heading";

const Contact = ({ data }) => {
  const { ...formData } = data ?? emailPreview[2];

  return (
    <Tailwind config={config}>
      <Html lang="pt">
        <Head />
        <Preview>
          E-mail Redirecionado: Solicitação de contato (não responder esse
          e-mail)
        </Preview>
        <Body className="bg-multi-gray font-page text-multiBrown items-center justify-center">
          <Container className="bg-multi-white dark:!bg-multiGreen-xLight shadow-multi mx-auto flex !max-w-[800px]">
            <Section className="bg-multi-green-light">
              <Row className="px-6">
                <Column className="flex w-full flex-col items-center justify-between py-3 md:flex-row md:py-0">
                  <Heading
                    as="h2"
                    className="text-multi-brown font-title justify-self-center text-center md:justify-self-start md:text-start"
                  >
                    Resumo de solicitação de contato
                  </Heading>
                  <Img
                    src={logo}
                    alt="Multiplusgroup Logo"
                    loading="eager"
                    height={50}
                    className="md:justify-self-end"
                  />
                </Column>
              </Row>
            </Section>
            <Section className="border-multi-brown border-0 border-t-[1px] border-solid px-6">
              <Heading className="text-multi-brown font-title">
                Olá consultor Multiplusgroup,
              </Heading>
              <Text className="text-[16px]">
                Você está recebendo este email pois{" "}
                <strong>{formData.nome}</strong> acabou de enviar uma
                solicitação de contato utilizando o formulário de contato
                existente em seu website.
              </Text>
              <Text className="text-[16px]">
                Essa mensagem é a mostra dos dados coletados no ato de
                preenchimento do formulário formulário.
              </Text>
              <Text className="text-[16px]">
                Por questões de praticidade, o meio de contato preferencial
                selecionado pelo usuário apresenta um botão com o texto{" "}
                <strong>Responder pelo meio preferencial</strong>, o qual
                clidado executará uma das seguintes ações:
              </Text>
              <ul>
                <li>
                  Abre o <strong>cliente de email</strong> padrão para envio de
                  reposta por e-mail
                </li>
                <li>
                  Abre a aplicação de <strong>discagem para telefones</strong>{" "}
                  padrão (se compatível) para reposta por telefone
                </li>
                <li>
                  Abre o <strong>WhatApp Web</strong> ou{" "}
                  <strong>WhatsApp Desktop</strong> para resposta por WhatsApp
                </li>
              </ul>
            </Section>
            <Section className="border-y-multi-brown/50 overflow-y-auto border-0 border-t-[1px] border-solid">
              <Row className="px-6">
                <Column>
                  <Heading className="text-multi-brown font-title">
                    Resumo da mensagem:
                  </Heading>
                </Column>
              </Row>
              <Row className="px-6">
                <Column className="flex flex-col gap-4">
                  <Text className="!m-0 flex flex-col sm:flex-row sm:gap-2">
                    <strong>Nome:</strong>
                    {formData.nome}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <b>E-mail: </b>
                    {formData.email ?? "Não fornecido"}
                    {formData.meioContato === "E-mail" && (
                      <Button
                        href={`mailto:${formData.email}`}
                        className="bg-multi-brown text-multi-green-light flex items-center rounded-full px-4 py-2"
                      >
                        Responder pelo meio preferencial
                      </Button>
                    )}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <strong>Telefone:</strong>
                    {formData.telefone ?? "Não fornecido"}
                    {formData.meioContato === "Telefone" && (
                      <Button
                        href={`tel:${genPhoneNumber(formData.telefone)}`}
                        className="bg-multi-brown text-multi-green-light flex items-center rounded-full px-4 py-2"
                      >
                        Responder pelo meio preferencial
                      </Button>
                    )}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <strong>Celular/WhatsApp:</strong>
                    {formData.whatsapp ?? "Não fornecido"}
                    {formData.meioContato === "WhatsApp" && (
                      <Button
                        href={`https://wa.me/${genPhoneNumber(formData.whatsapp)}`}
                        className="bg-multi-brown text-multi-green-light flex items-center rounded-full px-4 py-2"
                      >
                        Responder pelo meio preferencial
                      </Button>
                    )}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <strong>Motivo:</strong>
                    {formData.motivo}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <b>Preferência para resposta: </b>
                    {formData.meioContato}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <b>Melhor horário para resposta: </b>
                    {formData.horario}
                  </Text>
                  <Text className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2">
                    <b>Detalhes da mensagem:</b>
                  </Text>
                  <Section className="border-multi-brown shadow-multi bg-multi-green-light/50 -mt-4 rounded-lg border-[1px] border-solid px-4 py-2">
                    {formData.mensagem.split("\n").map((line, i) => {
                      return (
                        <Text
                          className="!m-0 flex flex-col items-start justify-start p-0 sm:flex-row md:items-center md:gap-2"
                          key={i}
                        >
                          {line}
                        </Text>
                      );
                    })}
                  </Section>
                </Column>
              </Row>
            </Section>
            <Section className="bg-multi-brown text-multi-white mt-6 flex items-center justify-center p-5 text-center text-xs">
              <Text>Por favor, não responder a esse email.</Text>
              <Text>
                {`© ${new Date().getFullYear()} | Multiplusgroup | www.multiplusgroup.com.br`}
              </Text>
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

const genPhoneNumber = (str) => {
  let cleanedStr = str.replace(/[^0-9]/g, "");
  if (cleanedStr.startsWith("55")) {
    cleanedStr = cleanedStr.replace(/^55/, "+55");
  } else cleanedStr = `+55${cleanedStr}`;
  return cleanedStr;
};

export default Contact;
