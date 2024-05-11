import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";

type TLLFormProps = {
  children: React.ReactNode;
  onSubmit: SubmitHandler<FieldValues>;
};

const LLForm = ({ children, onSubmit }: TLLFormProps) => {
  const methods = useForm();
  const { handleSubmit } = methods;
  const submit: SubmitHandler<FieldValues> = (data) => onSubmit(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(submit)}>{children}</form>
    </FormProvider>
  );
};

export default LLForm;
