import { getTrainings } from "@/services/trainings";

export default function Trainings() {
  const trainingsList = getTrainings();
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
        </li>
      ))}
    </ul>
  );
}
