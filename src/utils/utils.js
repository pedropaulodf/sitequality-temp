import { toastSuccess } from "./reactToastify";

export const copyText = (text) => {
  // Copia o texto
  navigator.clipboard.writeText(text);

  // Emite o toast
  toastSuccess("Copiado!");
};
