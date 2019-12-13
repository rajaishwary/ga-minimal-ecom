export function getFetch(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "GET"
      })
        .then(response => response.json())
        .then(response => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  