import { useContext, useEffect, useState } from "react";
import { getTrainings, enrollTraining } from "@/services/trainings";
import { UserContext } from "@/context/UserContext";

export function TrainingsList() {
  const { user } = useContext(UserContext);
  const [trainingsList, setTrainingsList] = useState([]);

  useEffect(() => {
    getTrainings().then((json) => {
      if (json.errorMessage) return setTrainingsList([]);
      return setTrainingsList(json);
    });
  }, []);

  const handleClick = (event) => {
    const { token } = user;
    event.preventDefault();
    const trainingId = event.target.name;
    enrollTraining({ trainingId, token });
  };

  return (
    <ul>
      {trainingsList.map((training) => (
        <li key={training.id}>
          <h3>Nombre: {training.name}</h3>
          <p>Cupos disponibles: {training.quotas}</p>
          <ul>
            días de estudio:
            {training.studyDays.map((days) => (
              <li key={days.date}>
                <p>fecha: {days.date}</p>
                <p>Hora de inicio: {days.startTime}</p>
                <p>Hora de fin: {days.endTime}</p>
              </li>
            ))}
          </ul>
          <form>
            <button type="button" name={training.id} onClick={handleClick}>
              Inscribir
            </button>
          </form>
        </li>
      ))}
    </ul>
  );
}
