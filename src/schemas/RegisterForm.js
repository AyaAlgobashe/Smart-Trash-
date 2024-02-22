import * as Yup from "yup";

export const RegisterSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name Should Be At Least 3 Characters")
    .required("You Must Enter Name"),
  username: Yup.string()
    .min(3, "Username Should Be At Least 3 Characters")
    .required("You Must Enter Username"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("You Must Enter Email"),
  phone: Yup.string()
    .min(8, "please enter a valid number")
    .required("You Must Enter number"),
  password: Yup.string()
    .min(6, "Password Should Be At Least 6 Chars")
    .max(25, 'This Is Too Long You can"t remember it')
    .required("You Must Enter Password"),
});
export const UpdateUserSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name Should Be At Least 3 Characters")
    .required("You Must Enter Name"),
  username: Yup.string()
    .min(3, "Username Should Be At Least 3 Characters")
    .required("You Must Enter Username"),
  email: Yup.string()
    .email("Invalid Email Address")
    .required("You Must Enter Email"),
  phone: Yup.string()
    .min(8, "please enter a valid number")
    .required("You Must Enter number"),
});
