import * as Yup from "yup";

export const NAME_SCHEMA = Yup.string()
  .matches(/^[A-ZА-Я][a-zа-я]{1.64}$/, "Enter a valid name")
  .required();

export const SIGN_IN_SCHEMA = Yup.object({
  email: Yup.string().email("Email mast be a valid").required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Password must contain one big letter and so on...."
    )
    .required(),
});

export const SIGN_UP_SCHEMA = Yup.object({
  name:NAME_SCHEMA,
  lastName:NAME_SCHEMA,
  displayName:NAME_SCHEMA,
  email: Yup.string().email("Email mast be a valid").required(),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,32}$/,
      "Password must contain one big letter and so on...."
    )
    .required(),
    confirmPassword:Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});
