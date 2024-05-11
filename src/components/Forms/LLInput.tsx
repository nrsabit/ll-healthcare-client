import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormINputProps = {
  name: string;
  type?: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth: boolean;
};

const LLInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth,
}: TFormINputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          name={name}
          type={type}
          label={label}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default LLInput;
