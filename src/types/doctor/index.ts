export type TDoctor = {
  id: string;
  email: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number;
  gender: "MALE" | "FEMALE" | "OTHER";
  apointmentFee: number;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  averageRating: number;
  review: any[]; // You may want to specify the structure of the review object if known
  doctorSpecialties: TDoctorSpecialty[];
};

export type TDoctorSpecialty = {
  specialtiesId: string;
  doctorId: string;
  specialties: any; // You may want to specify the structure of the specialties object if known
};

export type TDoctorForm = {
  id: string;
  name: string;
  profilePhoto: string;
  contactNumber: string;
  address: string;
  registrationNumber: string;
  experience: number | undefined;
  gender: "MALE" | "FEMALE";
  apointmentFee: number | undefined;
  qualification: string;
  currentWorkingPlace: string;
  designation: string;
  specialties?: TSpecialties[];
};

export type TSpecialties = {
  specialtiesId: string;
  isDeleted?: null;
};

export type TDoctorFormData = {
  doctor: TDoctorForm;
  password: string;
};
