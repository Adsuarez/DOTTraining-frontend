"use client";

import { useState, useContext } from "react";
import { createTraining } from "@/services/trainings";
import { validateForm } from "@/helpers/validateForm";
import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/router";

export function TrainingForm() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  const [error, setError] = useState({ status: false, message: "✔️" });

  if (!user || user.permissions !== 1) return router.push("/");

  const token = user?.token;
  const permissions = user?.permissions;
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTraining = Object.fromEntries(new FormData(event.target));
    validateForm(event).then((validationResult) => {
      if (validationResult.status === false) {
        createTraining(newTraining, token, permissions).then((json) => {
          if (json.errorMessage)
            return setError({
              status: true,
              message: `❌ ${json.errorMessage}, please try to login again`,
            });
        });
      }
      setError(validationResult);
    });
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
