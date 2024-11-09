import Actions from "@/components/Form/Actions";
import Checkbox from "@/components/Form/Checkbox";
import ComboBox from "@/components/Form/ComboBox";
import MaskInput from "@/components/Form/MaskInput";
import TextInput from "@/components/Form/TextInput";
import { horarios, motivos, preferencias } from "@/constants/staticOptions";
import { sendContato, setFormData } from "@/features/emails/emails.slice";
import AnimatedSection from "@/ui/AnimatedSection";
import Form from "@/ui/Form";
import Loader from "@/ui/Loader";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const FormContato = () => {
  const { isSending, error } = useSelector((state) => state.emails);
  const [hasError, setHasError] = useState(error);
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
    if (!hasError) reset();
  };

  useEffect(() => {
    setHasError(error);
  }, [error, hasError]);
  useEffect(() => {
    setMensagemCount(mensagem.length);
  }, [mensagem]);

  return (
    <Form
      className="mx-auto flex flex-col gap-4 py-5 md:grid md:grid-cols-3"
      onSubmit={handleSubmit(submitForm)}
      control={control}
      noValidate
    >
      {isSending && <Loader text="Enviando e-mail..." />}
      <AnimatedSection className="col-span-3">
        <TextInput
          type="text"
          variant="standard"
          register={{
            ...register("nome", { required: "Por favor informe seu nome" }),
          }}
          errors={errors?.nome}
          placeholder="Entre com seu nome completo"
          id="nome"
          label="Nome completo:"
        />
      </AnimatedSection>
      <AnimatedSection className="col-span-3">
        <TextInput
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
          label="E-mail:"
        />
      </AnimatedSection>
      <AnimatedSection>
        <MaskInput
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
          label="Telefone:"
          // hiddenLabel
        />
      </AnimatedSection>
      <AnimatedSection>
        <MaskInput
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
          label="Celular/WhatsApp:"
        />
      </AnimatedSection>
      <AnimatedSection>
        <ComboBox
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
          label="Motivo de contato:"
        />
      </AnimatedSection>
      <AnimatedSection className="col-span-3 flex flex-col gap-4 md:grid md:grid-cols-2">
        <ComboBox
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
          label="Horário para contato:"
        />
        <ComboBox
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
          label="Meio preferencial de contato:"
        />
      </AnimatedSection>
      <AnimatedSection className="col-span-3 grid">
        <p className="label">Mensagem:</p>
        <TextInput
          variant="standard"
          id="mensagem"
          register={{
            ...register("mensagem", {
              required: "Por favor nos informe os detalhes de sua solicitação",
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
        <Checkbox
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
          serão compartilhadas pela <strong>Multiplusgroup</strong> em hipótese
          alguma, com exceção de solicitações judiciais.
        </Checkbox>
      </AnimatedSection>
      <AnimatedSection className="col-span-3 w-[100%]">
        <Actions>
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
            className="inverted button grow px-6 transition-all duration-700 md:w-[130px] md:grow-0"
          >
            Cancelar
          </Button>
        </Actions>
      </AnimatedSection>
    </Form>
  );
};

export default FormContato;
