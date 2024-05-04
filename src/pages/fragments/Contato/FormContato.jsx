import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { Grid, Button } from "@mui/material";

import {
  setFormData,
  sendContato,
} from "../../../features/emails/emails.slice";
import {
  motivos,
  horarios,
  preferencias,
} from "../../../siteConstants/staticOptions";

import Form from "../../../ui/Form";
import Loader from "../../../ui/Loader";
import Toaster from "../../../ui/Toaster";
import InputMask from "../../../ui/InputMask";
import InputText from "../../../ui/InputText";
import InputTextArea from "../../../ui/InputTextArea";
import InputCombobox from "../../../ui/InputCombobox";
import InputCheckbox from "../../../ui/InputCheckbox";
import FormActions from "../../../ui/FormActions";
import AnimatedSection from "../../../ui/AnimatedSection";

const FormContato = () => {
  const { error, success, isSending } = useSelector((state) => state.emails);
  const dispatch = useDispatch();
  const { control, handleSubmit, formState, register, watch, reset } = useForm({
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      celular: "",
      motivo: "",
      horario: "",
      preferencia: "",
      mensagem: "",
      confirma: false,
    },
  });
  const { errors } = formState;
  const [mensagemCount, setMensagemCount] = useState(0);
  const [mensagem] = watch(["mensagem"]);
  const handleReset = () => {
    reset();
  };
  const submitForm = async (data) => {
    dispatch(setFormData({ data }));
    dispatch(sendContato({ data }));
    reset();
  };
  useEffect(() => {
    const msg = mensagem;
    setMensagemCount(msg.length);
  }, [mensagem]);
  return (
    <>
      {isSending && <Loader text="Enviando e-mail..." />}
      <Form
        className="bg-exata-lightGreen/25 shadow-exata mx-auto my-5 flex w-[90%] flex-col gap-4 rounded-lg p-5 md:grid md:grid-cols-3"
        onSubmit={handleSubmit(submitForm)}
        control={control}
        noValidate
      >
        <AnimatedSection className="col-span-3">
          <p className="label">Nome completo:</p>
          <InputText
            type="text"
            variant="standard"
            register={{
              ...register("nome", { required: "Por favor informe seu nome" }),
            }}
            errors={errors?.nome}
            placeholder="Entre com seu nome completo"
            id="nome"
            hiddenLabel
          />
        </AnimatedSection>
        <AnimatedSection className="col-span-3">
          <p className="label">E-mail:</p>
          <InputText
            type="text"
            variant="standard"
            register={{
              ...register("email", {
                required: "Por favor informe seu e-mail",
              }),
            }}
            errors={errors?.email}
            placeholder="Entre com seu e-mail"
            id="email"
            hiddenLabel
          />
        </AnimatedSection>
        <AnimatedSection>
          <p className="label">Telefone:</p>
          <InputMask
            id="telefone"
            placeholder="Somente números"
            mask="telefone"
            variant="standard"
            type="tel"
            control={control}
            errors={errors?.telefone}
            register={{
              ...register("telefone", {
                required: "Por favor forneça um telefone",
                minLength: {
                  value: 14,
                  message: "Por favor forneça um telefone válido",
                },
              }),
            }}
            hiddenLabel
          />
        </AnimatedSection>
        <AnimatedSection>
          <p className="label">Celular/WhatsApp:</p>
          <InputMask
            mask="celular"
            type="tel"
            variant="standard"
            register={{
              ...register("celular", {
                required: "Por favor forneça um telefone celular",
                minLength: {
                  value: 14,
                  message: "Por favor forneça um telefone válido",
                },
              }),
            }}
            errors={errors?.celular}
            placeholder="Somente números"
            id="celular"
            control={control}
            hiddenLabel
          />
        </AnimatedSection>
        <AnimatedSection>
          <p className="label">Motivo de contato:</p>
          <InputCombobox
            variant="standard"
            placeholder="Selecione uma opção"
            options={motivos}
            id="motivo"
            register={{
              ...register("motivo", {
                required: "Por favor selecione uma opção",
              }),
            }}
            errors={errors?.motivo}
            control={control}
            noOptionsText="A opção entrada é inválida"
            hiddenLabel
          />
        </AnimatedSection>
        <Grid
          container
          className="col-span-3 flex flex-col gap-4 md:grid md:grid-cols-2"
        >
          <AnimatedSection>
            <p className="label">Horário para contato:</p>
            <InputCombobox
              variant="standard"
              placeholder="Selecione uma opção"
              options={horarios}
              id="horario"
              register={{
                ...register("horario", {
                  required: "Por favor selecione uma opção",
                }),
              }}
              errors={errors?.horario}
              control={control}
              noOptionsText="A opção entrada é inválida"
              hiddenLabel
            />
          </AnimatedSection>
          <AnimatedSection>
            <p className="label">Meio preferencial de contato:</p>
            <InputCombobox
              variant="standard"
              placeholder="Selecione uma opção"
              options={preferencias}
              id="preferencia"
              register={{
                ...register("preferencia", {
                  required: "Por favor selecione uma opção",
                }),
              }}
              errors={errors?.preferencia}
              control={control}
              noOptionsText="A opção entrada é inválida"
              hiddenLabel
            />
          </AnimatedSection>
        </Grid>
        <AnimatedSection className="col-span-3 grid">
          <p className="label">Mensagem:</p>
          <InputTextArea
            variant="standard"
            id="mensagem"
            register={{
              ...register("mensagem", {
                required:
                  "Por favor nos informe os detalhes de sua solicitação",
                maxLength: {
                  value: 2000,
                  message: `Sua mensagem não pode conter mais que 2000 caracteres`,
                },
              }),
            }}
            limit={2000}
            errors={errors?.mensagem}
            rows={5}
            placeholder="Digite sua mensagem com até 2000 caracteres"
            charCount={mensagemCount}
            hiddenLabel
          />
        </AnimatedSection>
        <AnimatedSection className="col-span-3">
          <InputCheckbox
            id="confirma"
            register={{
              ...register("confirma", {
                required: "A caixa acima é de seleção obrigatória",
              }),
            }}
            errors={errors?.confirma}
            control={control}
          >
            Estou ciente de que as informações inseridas nesse formulário não
            serão compartilhadas pela <strong>MultiplusGroup</strong> em
            hipótese alguma, com exceção de solicitações judiciais.
          </InputCheckbox>
        </AnimatedSection>
        <AnimatedSection className="col-span-3 w-[100%]">
          <FormActions>
            <Button
              disabled={Boolean(Object.keys(errors).length)}
              type="submit"
              className="button grow px-6 transition-all duration-700 md:w-fit md:grow-0"
            >
              Enviar formulário
            </Button>
            <Button
              type="reset"
              onClick={handleReset}
              className="inverted button  grow px-6 transition-all duration-700 md:w-[130px] md:grow-0"
            >
              Cancelar
            </Button>
          </FormActions>
        </AnimatedSection>
      </Form>
      {error && (
        <Toaster
          message="O formulário não foi enviado. Por favor tente novamente mais tarde!"
          className="errorMessage"
          severity="error"
        />
      )}
      {success && (
        <Toaster
          message="Formulário enviado com sucesso e em breve um consultor da MultiplusGroup entrará em contato! "
          className="successMessage"
          severity="success"
        />
      )}
    </>
  );
};

export default FormContato;
