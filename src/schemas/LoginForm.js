import * as Yup from "yup";

export const LoginSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username Should Be At Least 3 Characters")
    .required("You Must Enter Username"),

  password: Yup.string()
    .min(6, "Password Should Be At Least 6 Chars")
    .max(25, 'This Is Too Long You can"t remember it')
    .required("You Must Enter Password"),
});
