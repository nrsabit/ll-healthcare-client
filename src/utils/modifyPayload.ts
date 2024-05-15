export const modifyPayload = (values: any) => {
  const obj = { ...values };
  const file = obj["file"];
  delete obj["file"];
  const data = JSON.stringify(obj);
  const formdata = new FormData();
  formdata.append("data", data);
  formdata.append("file", file as Blob);

  return formdata;
};
