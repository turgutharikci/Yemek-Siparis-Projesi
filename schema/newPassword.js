import * as Yup from "yup";

export const newPasswordSchema = Yup.object({
  password: Yup.string()
    .required("Şifre gereklidir.")
    .min(8, "Şifre en az 8 karakter olmalıdır."),
  confirmPassword: Yup.string()
    .required("Şifreyi onaylamanız gerekiyor.")
    .oneOf([Yup.ref("şifre"), null], "Şifreler aynı olmalıdır."),
});
