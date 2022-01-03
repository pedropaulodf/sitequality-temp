import { useForm, Controller } from "react-hook-form";
import { toastError, toastSuccess } from "../utils/reactToastify";

import { Footer } from "../components/Footer";
import { Input } from "../components/Input";
import GoogleMapQuality from "../components/GoogleMapQuality";
import HeadCustom from "../components/HeadCustom";

import styles from "../styles/Contato.module.scss";

export default function Contato() {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData) => {
    // alert(JSON.stringify(formData));

    // fetch("https://formsubmit.co/ajax/seueemailaqui@email.com", {
    fetch("https://formsubmit.co/ajax/297b0b7ab78bd0b12cca451561925b3d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _subject: "Novo e-mail enviado do site QualitySys",
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        assunto: formData.assunto,
        mensagem: formData.mensagem,
        pais: formData.pais,
        estado: formData.estado,
        cidade: formData.cidade,
        // _cc: "email1@gmail.com,email2@gmail.com"
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.success) {
          toastSuccess("E-mail enviado!", 3000);
        }
      })
      .catch((error) => {
        console.log(error);
        if (error) {
          toastError("E-mail não foi enviado!", 3000);
        }
      });
  };

  // const beforeMaskedStateChange = (states) => {

  //   let { value } = states.currentState;

  //   const newValue = value.replace(/[^0-9]/g, "");
  //   if (newValue.length < 10) {
  //     return states.nextState;
  //   }

  //   if (newValue.length === 10) {
  //     value = newValue.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  //   } else if (newValue.length > 10) {
  //     value = newValue.replace(/^(\d{2})(\d{5})(\d{4})(\d*)$/, "($1) $2-$3");
  //   }

  //   return {
  //     value: value,
  //     selection: {
  //       start: value.length,
  //       end: value.length,
  //     },
  //   };
  // };

  // https://formsubmit.co/documentation

  return (
    <>
      <HeadCustom pageName="Contato" />

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Contato</h2>
          <div className={styles.content}>
            <div className={styles.form}>
              <h3>Entre em contato conosco:</h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="assunto"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Assunto:"
                      error={errors.assunto}
                    />
                  )}
                />
                <Controller
                  name="nome"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Nome:"
                      error={errors.nome}
                    />
                  )}
                />
                <Controller
                  name="pais"
                  control={control}
                  rules={{ required: true }}
                  defaultValue="Brasil"
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="País:"
                      error={errors.pais}
                    />
                  )}
                />
                <Controller
                  name="estado"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Estado:"
                      error={errors.estado}
                    />
                  )}
                />
                <Controller
                  name="cidade"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="text"
                      label="Cidade:"
                      error={errors.cidade}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      label="E-mail:"
                      error={errors.email}
                    />
                  )}
                />
                <Controller
                  name="telefone"
                  control={control}
                  defaultValue=""
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="tel"
                      label="Telefone:"
                      error={errors.telefone}
                    />
                  )}
                />
                <Controller
                  name="mensagem"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="textarea"
                      label="Mensagem:"
                      error={errors.mensagem}
                    />
                  )}
                />
                <button type="submit">Enviar contato</button>
              </form>
            </div>
            <div className={styles.contact}>
              <h3>Endereço</h3>
              <p>
                <strong>Quality Systems LTDA</strong>
              </p>
              <p>Rua Carajás, 604, Lídice</p>
              <p>Uberlândia - MG</p>
              <p>CEP: 38400-076</p>
              <p>
                Telefone: <a href="tel:3432924700">(34) 3292-4700</a>
              </p>
              <br />
              <h3>Horário Comercial</h3>
              <p>
                <strong>Segunda à Sexta:</strong> 08:00 à 18:00
              </p>
              <p>
                <strong>Sábado:</strong> 08:00 ao 12:00
              </p>
              <p>
                <strong>Domingo:</strong> Fechado
              </p>
            </div>
          </div>

          <div className={styles.map}>
            <GoogleMapQuality />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
