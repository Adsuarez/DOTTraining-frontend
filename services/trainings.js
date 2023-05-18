import { trainingsList } from "../FakeTrainingsList";
const BASE_URL = "http://localhost:3333/api/trainings";

export function getTrainings() {
  return trainingsList;
}

export function createTraining({ name, quotas, date, startTime, endTime }) {
  const newTraining = {
    name,
    quotas,
    studyDays: [{ date, startTime, endTime }],
  };
  fetch(`${BASE_URL}`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(newTraining),
  })
    .then((response) => response.json())
    .then((json) => console.log({ json }))
    .catch((error) => console.error(error));
}
