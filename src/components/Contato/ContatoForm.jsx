import sendEmail from "@api/apiEmail";
import CheckInput from "@components/Form/CheckInput";
import ComboInput from "@components/Form/ComboInput";
import FormActions from "@components/Form/FormActions";
import MaskInput from "@components/Form/MaskInput";
import TextInput from "@components/Form/TextInput";
import { horarioOpts, meioOpts, motivoOpts } from "@constants/selectOptions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Grid2 as Grid } from "@mui/material";
import { setMessage } from "@store/slices/toaster.slice";
import AnimatedSection from "@ui/AnimatedSection";
import Form from "@ui/Form";
import Loader from "@ui/Loader";
import contatoFormSchema, { msgLimit } from "@utils/contatoForm.schema"; // ,
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const ContatoForm = ({ className = "" }) => {
  const dispatch = useDispatch();
  const { control, register, handleSubmit, formState, watch, reset, trigger } =
    useForm({
      resolver: zodResolver(contatoFormSchema),
      defaultValues: {
        nome: "",
        motivo: "",
        horario: "",
        meioContato: "",
        email: "",
        telefone: "",
        whatsapp: "",
        mensagem: "",
        termos: false,
      },
      mode: "all",
    });
  const { errors, isSubmitting } = formState;

  const [msgCount, meioContato] = watch(["mensagem", "meioContato"]);

  const submitForm = async (data) => {
    const isSent = await sendEmail({ data });
    if (isSent === "OK") {
      dispatch(
        setMessage({
          message:
            "Mensagem enviada com sucesso! Em breve um consultor entrará em contato para tratar sobre a sua solicitação!",
          severity: "success",
        }),
      );
      reset();
    } else {
      const err = new Error(isSent);
      console.error(err);
      dispatch(
        setMessage({
          message:
            "Sua mensagem não pode ser enviada, por favor tente novamente mais tarde",
          severity: "error",
        }),
      );
    }
  };

  useEffect(() => {
    const subscription = watch((_value, { name }) => {
      if (name === "meioContato") {
        trigger(["email", "telefone", "whatsapp"]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, trigger]);

  return (
    <Grid className="bg-multi-gray/50 flex justify-center drop-shadow-lg">
      {isSubmitting && <Loader text="Enviando e-mail" />}
      <Form
        control={control}
        onSubmit={handleSubmit(submitForm)}
        className={`flex flex-col gap-5 px-5 py-5 ${className}`}
      >
        <AnimatedSection>
          <TextInput
            id="nome"
            fieldName="Nome completo:"
            register={{ ...register("nome") }}
            errors={errors?.nome}
            placeholder="Nome Sobrenome"
          />
        </AnimatedSection>
        <AnimatedSection>
          <TextInput
            id="email"
            fieldName="E-mail:"
            {...register("email")}
            errors={errors?.email}
            type="email"
            placeholder="email@exemplo.com"
            required={meioContato === "E-mail" && true}
          />
        </AnimatedSection>
        <Grid className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <AnimatedSection>
            <MaskInput
              id="telefone"
              mask="telefone"
              fieldName="Telefone:"
              placeholder="Somente números"
              {...register("telefone")}
              errors={errors?.telefone}
              control={control}
            />
          </AnimatedSection>
          <AnimatedSection>
            <MaskInput
              id="whatsapp"
              mask="celular"
              fieldName="Celular/WhatsApp:"
              placeholder="Somente números"
              {...register("whatsapp")}
              errors={errors?.whatsapp}
              control={control}
            />
          </AnimatedSection>
          <AnimatedSection className="!mb-0">
            <ComboInput
              id="meioContato"
              fieldName="Meio de contato preferencial:"
              {...register("meioContato")}
              errors={errors?.meioContato}
              control={control}
              options={meioOpts}
              placeholder="Selecione uma opção"
            />
          </AnimatedSection>
        </Grid>
        <Grid className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <AnimatedSection>
            <ComboInput
              id="motivo"
              fieldName="Motivo de contato:"
              {...register("motivo")}
              errors={errors?.motivo}
              control={control}
              options={motivoOpts}
              placeholder="Selecione uma opção"
            />
          </AnimatedSection>
          <AnimatedSection className="!mb-0">
            <ComboInput
              id="horario"
              fieldName="Horário para contato:"
              {...register("horario")}
              errors={errors?.horario}
              control={control}
              options={horarioOpts}
              placeholder="Selecione uma opção"
            />
          </AnimatedSection>
        </Grid>
        <AnimatedSection>
          <TextInput
            id="mensagem"
            fieldName="Mensagem:"
            {...register("mensagem")}
            errors={errors?.mensagem}
            rows={5}
            limit={msgLimit}
            charCount={msgCount?.length}
            placeholder={`Digite sua menagem com até ${msgLimit} caracteres`}
          />
        </AnimatedSection>
        <AnimatedSection className="!mb-2">
          <CheckInput
            id="termos"
            control={control}
            errors={errors?.termos}
            {...register("termos")}
          >
            Estou ciente de que as informações inseridas nesse formulário não
            serão compartilhadas pela Multiplusgroup em hipótese alguma, com
            exceção de solicitações judiciais.
          </CheckInput>
        </AnimatedSection>
        <FormActions>
          <Button type="submit" className="btn btn-cta">
            Enviar
          </Button>
          <Button onClick={() => reset()} className="btn btn-cta">
            Limpar formulário
          </Button>
        </FormActions>
      </Form>
    </Grid>
  );
};

export default ContatoForm;
