import { trainingsList } from "../FakeTrainingsList";
const BASE_URL = "http://localhost:3333/api/trainings";

export function getTrainings() {
  return trainingsList;
}

export async function createTraining({
  name,
  quotas,
  date,
  startTime,
  endTime,
}) {
  const newTraining = {
    name,
    quotas,
    studyDays: [{ date, startTime, endTime }],
  };

  return fetch(`${BASE_URL}`, {
    method: "POST",
    mode: "cors",
    headers: { "content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(newTraining),
  })
    .then((response) => response.json())
    .then((json) => {
      console.log({ json });
      return json;
    })
    .catch((error) => {
      return { status: true, errorMessage: error };
    });
}
