

export async function getPoptin(endPoint) {
  const result = await getData(endPoint);
  return result.data;
}


function getData(endpoint){
  return new Promise((resolve) => {
    setTimeout(function () {
      fetch(endpoint).then((res) => {
        resolve(res.json());
      });
    }, 500);
  });
}

