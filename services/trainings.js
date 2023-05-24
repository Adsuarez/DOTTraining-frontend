import { trainingsList } from "../FakeTrainingsList";
const BASE_URL = "http://localhost:3333/api/trainings";

export function getTrainings() {
  return trainingsList;
}

export async function createTraining(newTraining, token) {
  const { name, quotas, date, startTime, endTime } = newTraining;
  const trainingToCreate = {
    name,
    quotas,
    date,
    startTime,
    endTime,
  };

  return fetch(`${BASE_URL}`, {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(trainingToCreate),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return { status: true, errorMessage: error };
    });
}
