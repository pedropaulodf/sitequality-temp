import { Controller, useForm } from "react-hook-form";
import { toastError, toastSuccess } from "../utils/reactToastify";
import { useRef, useState } from "react";

import { Footer } from "../components/Footer";
import GoogleMapQuality from "../components/GoogleMapQuality";
import HeadCustom from "../components/HeadCustom";
import { Input } from "../components/Input";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contato.module.scss";

export default function Contato() {
  const form = useRef();

  const sendEmail = () => {
    setIsSending(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setIsSending(false);
          toastSuccess("E-mail enviado com sucesso!");
          console.log(result.text);
          return false;
        },
        (error) => {
          setIsSending(false);
          toastError("Houve um erro ao enviar o Email! Tente novamente.");
          console.log(error.text);
        }
      );
  };

  const [isSending, setIsSending] = useState(false);

  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  return (
    <>
      <HeadCustom pageName="Contato" />

      <main className={styles.container}>
        <section className={styles.wrapper}>
          <h2>Contato</h2>
          <div className={styles.content}>
            <div className={styles.form}>
              <h3>Entre em contato conosco:</h3>
              <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                <Controller
                  name="subject"
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
                  name="name"
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
                  name="country"
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
                  name="state"
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
                  name="city"
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
                  name="user_email"
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
                  name="phone_number"
                  control={control}
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
                  name="message"
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
                <button
                  type="submit"
                  disabled={isSending}
                  style={{ opacity: isSending ? 0.5 : 1 }}
                >
                  {isSending ? "Enviando..." : "Enviar contato"}
                </button>
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
