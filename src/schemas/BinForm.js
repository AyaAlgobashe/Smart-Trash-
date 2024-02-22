import * as Yup from "yup";

export const BinSchema = Yup.object({
  serialNumber: Yup.number("serialNumber")
    .min(0)
    .required("You Must Enter Serial Number"),
  latitude: Yup.number("Latitude")
    .min(0)
    .required("You Must Enter Serial Latitude"),
  longitude: Yup.number("Longitude")
    .min(0)
    .required("You Must Enter Serial Longitude"),
  status: Yup.number("Status").min(0).max(100).required("You Must Enter Serial Status"),
});
