const Utilities = {
  REGEX_VALD_EMAIL: {
    pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    name: "valid_email",
  },
  REGEX_VALD_PASSWORD: {
    pattern:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}/,
    name: "valid_password",
  },
  REGEX_VALD_NAME: {
    pattern: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    name: "valid_name",
  },
  REGEX_VALD_OBJECT_ID: {
    pattern: /^[a-zA-Z0-9]{24}$/,
    name: "valid_object_id",
  },

  REGEX_VALD_HEX_COLOR: {
    pattern: /^#[a-fA-F0-9]{6}$/,
    name: "valid_hexadecimal_color",
  },

  MSG_ALREADY_REGISTERED_USER:
    "Ya existe una cuenta asociada con el correo ingresado",
  MSG_NOT_VALID_PASSWORD:
    "La contraseña debe una longitud 8-15, contener una mayúscula, una minúsculas, un número y un carácter especial [$@$!%*?&]",
  USER_NOT_FOUND_MSG: "User not found: ",
};

export default Utilities;
