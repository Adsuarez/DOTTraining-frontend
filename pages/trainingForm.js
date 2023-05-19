import { validateForm } from "../helpers/validateForm";
import { useState } from "react";
import Layout from "../components/Layout";
import { createTraining } from "@/services/trainings";

export default function TrainingFormPage() {
  const [error, setError] = useState({ status: false, message: "✔️" });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, quotas, date, startTime, endTime } = Object.fromEntries(
      new FormData(event.target)
    );
    validateForm(event).then((validationResult) => {
      if (validationResult.status === false) {
        createTraining({ name, quotas, date, startTime, endTime }).then(
          (json) => {
            if (json.errorMessage)
              return setError({
                status: true,
                message: `❌ ${json.errorMessage}, please try to sign in again`,
              });
            return setError(validationResult);
          }
        );
      }
    });
  };

  return (
    <Layout>
      <h1>Crear una nueva capacitación</h1>
      {error.status && <p>{error.message}</p>}
      {!error.status && <p>{error.message}</p>}
      <form method="GET" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input placeholder="programación 1" type="text" name="name" required />
        <label>Cupos:</label>
        <input placeholder="12" type="number" name="quotas" required />
        <label>Fecha:</label>
        <input type="date" name="date" required />
        <label>Hora de inicio:</label>
        <input type="time" name="startTime" required />
        <label>Hora de fin:</label>
        <input type="time" name="endTime" required />
        <button>Crear</button>
      </form>
    </Layout>
  );
}
