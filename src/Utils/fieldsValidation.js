export const NAME_REGEX =
  /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
export const NAME_INSTRUCTIONS =
  "Nome deve conter somente letras minúsculas e maiúsculas.";

export const EMAIL_REGEX = /\S+@\S+\.\S+/;
export const EMAIL_INSTRUCTIONS = "E-mail inválido. Ex: mcdaleste@yahoo.com.";

export const PASSWORD_REGEX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,15}$/;
export const PASSWORD_INSTRUCTIONS = `Senha: 
8-15 caracteres, 
1 letra min.,
1 letra maiús.,
1 núm.,
1 símbolo $*&@#`;
