import "react-toastify/dist/ReactToastify.css";

import { FiLock, FiUser, FiX } from "react-icons/fi";
import React, { useState } from "react";
import { toastError, toastSuccess } from "../../utils/reactToastify";

import styles from "./styles.module.scss";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// import { ReactCircleModal } from "react-circle-modal";
// import { Controller, useForm } from "react-hook-form";

// import { InputIcon } from "../InputIcon";







interface ButtonModalClientAreaProps {
  handleCloseMenu: () => void;
}

const ButtonModalClientArea = React.forwardRef<ButtonModalClientAreaProps>(
  ({ handleCloseMenu }: ButtonModalClientAreaProps, ref) => {
    const router = useRouter();

    const [toggleModalFunc, setToggleModalFunc] = useState(null);

    // const {
    //   // register,
    //   handleSubmit,
    //   control,
    //   formState: { errors },
    // } = useForm();

    // Função que cuida de abrir o modal e fechar o menu
    const handleOpenModal = (onclick: any) => {
      // handleCloseMenu();
      return onclick;
    };

    const onSubmit = (formData, onClick) => {
      // alert(JSON.stringify(formData));

      // Caso login correto, acessa a página do cliente
      if (formData.codigo == "teste" && formData.senha == "123") {
        // Seta o estado para fechar o ReactCircleModal
        setToggleModalFunc(onClick);

        // Enviar o usuário para a página do cliente
        router.push("/areacliente");

        // Limpa todos os toasts
        toast.dismiss();

        // Emite o toast
        toastSuccess("Login efetuado com sucesso!", 2000);
      } else {
        // Emite o toast
        toastError("Código ou Senha inválido(s)!");
      }
    };

    return (
      <button
        type="button"
        className={styles.openButtom}
        // onClick={(e) => handleOpenModal(onClick(e))}
        onClick={(e) =>
          window.open("https://qualitysys.com.br/novo/area-do-cliente")
        }
        disabled={router.pathname === "/areacliente" ? true : false}
      >
        <FiUser className={styles.iconButton} />
        Área do Cliente
      </button>
      // <ReactCircleModal
      //   backgroundColor="#032d5ef0"
      //   toogleComponent={(onClick) => (
      //     <button
      //       type="button"
      //       className={styles.openButtom}
      //       onClick={(e) => handleOpenModal(onClick(e))}
      //       disabled={router.pathname === "/areacliente" ? true : false}
      //     >
      //       <FiUser className={styles.iconButton} />
      //       Área do Cliente
      //     </button>
      //   )}
      //   // Optional fields and their default values
      //   offsetX={0}
      //   offsetY={0}
      // >
      //   {(onClick) => (
      //     <div className={styles.modal}>
      //       <div className={styles.modalBox}>
      //         <button
      //           onClick={onClick || toggleModalFunc}
      //           className={styles.closeButton}
      //           type="button"
      //         >
      //           <FiX />
      //         </button>
      //         <h6>Área do Cliente</h6>
      //         <form onSubmit={handleSubmit((m) => onSubmit(m, onClick))}>
      //           <div className={styles.inputBox}>
      //             <Controller
      //               name="codigo"
      //               control={control}
      //               defaultValue="teste"
      //               rules={{ required: true }}
      //               render={({ field }) => (
      //                 <InputIcon
      //                   type="text"
      //                   placeholder="Código do cliente:"
      //                   iconComponent={<FiUser />}
      //                   error={errors.codigo}
      //                   {...field}
      //                 />
      //               )}
      //             />

      //             <Controller
      //               name="senha"
      //               control={control}
      //               defaultValue="123"
      //               rules={{ required: true }}
      //               render={({ field }) => (
      //                 <InputIcon
      //                   type="password"
      //                   placeholder="Senha:"
      //                   iconComponent={<FiLock />}
      //                   error={errors.senha}
      //                   {...field}
      //                 />
      //               )}
      //             />
      //             <button type="submit" className={styles.submitButtom}>
      //               Efetuar Login
      //             </button>
      //           </div>
      //         </form>
      //       </div>
      //     </div>
      //   )}
      // </ReactCircleModal>
    );
  }
);
ButtonModalClientArea.displayName = "ButtonModalClientArea";
export default ButtonModalClientArea;
