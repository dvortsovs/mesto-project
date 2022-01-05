function queryGetRequests(config, url) {
  return fetch(`${config.urls.baseUrl}${url}`, config.headers)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(res.status);
    })
}

export {queryGetRequests}
