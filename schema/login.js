import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().required("E-posta gereklidir.").email("E-posta geçersiz."),
  password: Yup.string()
    .required("Şifre gereklidir.")
    .min(8, "Şifre en az 8 karakter olmalıdır."),
});
