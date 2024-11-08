const geraLista = (lista) => {
  return lista.map((item) => {
    return {
      label: item,
      _id: item,
    };
  });
};

const motivoList = [
  "Solicitar orçamento",
  "Esclarecer dúvidas",
  "Registar uma reclamação",
  "Fazer sugestões",
  "Deixar elogios",
  "Relatar problema com o site",
];

const horarioList = [
  "Indiferente",
  "Horário Comercial",
  "Manhã (08:00 às 12:00)",
  "Tarde (14:00 às 18:00)",
];

const preferenciaList = [
  "E-mail",
  "Ligação para o telefone fixo",
  "Ligação para o telefone celular",
  "WhatsApp",
];

export const motivos = geraLista(motivoList);
export const horarios = geraLista(horarioList);
export const preferencias = geraLista(preferenciaList);
