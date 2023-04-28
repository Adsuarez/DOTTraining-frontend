import { trainingsList } from "../FakeTrainingsList";
import { validateForm } from "../helpers/validateForm";
import { useState } from "react";

export default function CreateTraining() {
  const [error, setError] = useState({ status: false, message: "✔️" });
  console.log(trainingsList);

  const handleSubmit = (event) => {
    setError(validateForm(event));
  };

  return (
    <>
      <h1>Crear una nueva capacitación</h1>
      {error.status && <p>{error.message}</p>}
      {!error.status && <p>{error.message}</p>}
      <form method="GET" onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input placeholder="programación 1" type="text" name="name" />
        <label>Cupos:</label>
        <input placeholder="12" type="number" name="quotas" />
        <label>Fecha:</label>
        <input type="date" name="date" />
        <label>Hora de inicio:</label>
        <input type="time" name="startTime" />
        <label>Hora de fin:</label>
        <input type="time" name="endTime" />
        <button>Crear</button>
      </form>
    </>
  );
}
