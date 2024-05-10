"use server";

export const registerPatient = async (payload: FormData) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST",
      body: payload,
      cache: "no-store",
    }
  );

  const userInfo = await res.json();
  return userInfo;
};
