const telefone_mask = ["(00) 0000-0000"];
const celular_mask = ["(00) 0 0000-0000"];

const inputMask = (type) => {
  switch (type) {
    case "telefone":
      return telefone_mask;
    case "celular":
      return celular_mask;
    default:
      return;
  }
};

export default inputMask;
