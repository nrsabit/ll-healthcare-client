import { SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TFormINputProps = {
  name: string;
  type?: string;
  label?: string;
  size?: "small" | "medium";
  fullWidth?: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
};

const LLInput = ({
  name,
  type = "text",
  label,
  size = "small",
  fullWidth,
  sx,
  placeholder,
  required,
}: TFormINputProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          name={name}
          type={type}
          label={label}
          variant="outlined"
          size={size}
          fullWidth={fullWidth}
          sx={sx}
          placeholder={placeholder}
          required={required}
          error={!!error?.message}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default LLInput;
