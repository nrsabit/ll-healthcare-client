import LLDatePicker from "@/components/Forms/LLDatePicker";
import LLForm from "@/components/Forms/LLForm";
import LLTimePicker from "@/components/Forms/LLTimePicker";
import LLModal from "@/components/Shared/LLModals/LLModal";
import { useCreateScheduleMutation } from "@/redux/api/scheduleApi";
import { dateFormatter } from "@/utils/dateFormatter";
import { timeFormatter } from "@/utils/timeFormatter";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const ScheduleModal = ({ open, setOpen }: TProps) => {
  const [createSchedule] = useCreateScheduleMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    values.startDate = dateFormatter(values.startDate);
    values.endDate = dateFormatter(values.endDate);
    values.startTime = timeFormatter(values.startTime);
    values.endTime = timeFormatter(values.endTime);
    try {
      const res = await createSchedule(values).unwrap();
      if (res?.length) {
        toast.success("Schedules created successfully!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <LLModal open={open} setOpen={setOpen} title="Create Schedule">
      <LLForm onSubmit={handleFormSubmit}>
        <Grid container spacing={2} sx={{ width: "400px" }}>
          <Grid item md={12}>
            <LLDatePicker name="startDate" label="Start Date" />
          </Grid>
          <Grid item md={12}>
            <LLDatePicker name="endDate" label="End Date" />
          </Grid>
          <Grid item md={6}>
            <LLTimePicker name="startTime" label="Start Time" />
          </Grid>
          <Grid item md={6}>
            <LLTimePicker name="endTime" label="End Time" />
          </Grid>
        </Grid>
        <Button type="submit" sx={{ mt: 1 }}>
          Create
        </Button>
      </LLForm>
    </LLModal>
  );
};

export default ScheduleModal;
