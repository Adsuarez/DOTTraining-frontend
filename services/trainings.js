import { trainingsList } from "../FakeTrainingsList";

export function getTrainings() {
  return trainingsList;
}

export function createTraining({ name, quotas, date, startTime, endTime }) {
  trainingsList.push({
    id: 3,
    name,
    quotas,
    studyDays: [{ date, startTime, endTime }],
  });
}
