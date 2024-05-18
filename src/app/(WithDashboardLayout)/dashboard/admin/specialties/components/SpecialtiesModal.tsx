import LLFileUploader from "@/components/Forms/LLFileUploader";
import LLForm from "@/components/Forms/LLForm";
import LLInput from "@/components/Forms/LLInput";
import LLModal from "@/components/Shared/LLModals/LLModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtiesModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      if (res?.id) {
        toast.success("Specialty Created Successfuly");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err);
    }
  };
  return (
    <LLModal open={open} setOpen={setOpen} title="Create a New Specialty">
      <LLForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <LLInput name="title" label="Title" placeholder="Title" />
          </Grid>
          <Grid item md={6}>
            <LLFileUploader name="file" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 2 }}>
          Create
        </Button>
      </LLForm>
    </LLModal>
  );
};

export default SpecialtiesModal;
