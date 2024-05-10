export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formdata = new FormData();
  formdata.append("data", data);

  return formdata;
};
