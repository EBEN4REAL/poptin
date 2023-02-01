export async function getPoptin(endPoint) {
  const result = await getData(endPoint);
  return result.data;
}

export async function saveTextChanges(endPoint, payload) {
  const result = await updateData(endPoint, payload);
  return result.data;
}

export async function saveElementsPositions(endPoint, payload) {
  const result = await updateData(endPoint, payload);
  return result.data;
}

export async function getElementsPositions(endPoint) {
  const result = await getData(endPoint);
  return result.data;
}

export async function createElementsPositions(endPoint) {
  const result = await createData(endPoint);
  return result.data;
}

export async function createText(endPoint, payload) {
  const result = await createData(endPoint, payload);
  return result.data;
}



function getData(endpoint) {
  return new Promise((resolve) => {
    fetch(endpoint).then((res) => {
      resolve(res.json());
    });
  });
}

function updateData(endpoint, payload) {
  return new Promise((resolve) => {
    fetch(endpoint, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => console.error("Error:", error));
  });
}

function createData(endpoint, payload) {
  return new Promise((resolve) => {
    fetch(endpoint, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => console.error("Error:", error));
  });
}

