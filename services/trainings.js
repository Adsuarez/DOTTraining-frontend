const BASE_URL = "http://localhost:3333/api/trainings";

export const getTrainings = async () => {
  return fetch(BASE_URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => console.error({ error }));
};

export const createTraining = async (newTraining, token, permissions) => {
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
    body: JSON.stringify({ trainingToCreate, permissions }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return { status: true, errorMessage: error };
    });
};
