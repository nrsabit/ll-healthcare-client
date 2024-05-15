import * as React from "react";
import { SxProps, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";

type TFileUploaderProps = {
  name: string;
  label?: string;
  sx?: SxProps;
};

export default function LLFileUploader({
  name,
  label,
  sx,
}: TFileUploaderProps) {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => {
        return (
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            sx={{ ...sx }}
            startIcon={<CloudUploadIcon />}
          >
            {label || "Upload File"}
            <Input
              type={name}
              {...field}
              value={value?.fileName}
              style={{ display: "none" }}
              onChange={(e) =>
                onChange((e?.target as HTMLInputElement)?.files?.[0])
              }
            />
          </Button>
        );
      }}
    />
  );
}
