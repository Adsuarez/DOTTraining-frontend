// const BASE_URL = "http://localhost:3333/api/trainings";
const BASE_URL = "https://dot-training-backend.fly.dev/api/trainings";

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
    .catch((error) => {
      return { errorMessage: error };
    });
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

export const enrollTraining = async ({ token, trainingId }) => {
  return fetch(`${BASE_URL}/enroll`, {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ trainingId }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return { status: true, errorMessage: error };
    });
};

export const cancelTraining = async ({ token, trainingId }) => {
  return fetch(`${BASE_URL}/cancel`, {
    method: "POST",
    mode: "cors",
    headers: {
      "content-type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ trainingId }),
  })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return { status: true, errorMessage: error };
    });
};
