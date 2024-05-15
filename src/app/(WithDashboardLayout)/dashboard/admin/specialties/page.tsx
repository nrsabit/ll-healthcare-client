"use client";
import { Box, IconButton, Stack, TextField, Typography } from "@mui/material";
import SpecialtiesModal from "./components/SpecialtiesModal";
import { useState } from "react";
import {
  useDeleteSpecialtyMutation,
  useGetAllSpecialtiesQuery,
} from "@/redux/api/specialtiesApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const SpecialtiesPage = () => {
  const { data, isLoading } = useGetAllSpecialtiesQuery({});
  const [deleteSpecialty] = useDeleteSpecialtyMutation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteSpecialty(id).unwrap();
      if (res?.id) {
        toast.success("Specialty deleted successfuly");
      }
    } catch (err: any) {
      console.log(err);
    }
  };

  const columns: GridColDef[] = [
    { field: "title", headerName: "Title", width: 400 },
    {
      field: "icon",
      headerName: "Icon",
      flex: 1,
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Box>
            <Image src={row?.icon} height={30} width={30} alt="Icon" />
          </Box>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <SpecialtiesModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField size="small" placeholder="Search Specialties" />
      </Stack>

      <Box mt={3}>
        <Typography component="h1" variant="h5" fontWeight={600}>
          All Specialties
        </Typography>

        {!isLoading ? (
          <Box mt={1}>
            <DataGrid rows={data} columns={columns} />
          </Box>
        ) : (
          <h1>Loading....</h1>
        )}
      </Box>
    </Box>
  );
};

export default SpecialtiesPage;
