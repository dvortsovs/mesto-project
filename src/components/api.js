function queryGetRequests(config, url) {
  return fetch(`${config.urls.baseUrl}${url}`, config.headers)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(res.status);
    })
}

function queryPatchRequests(config, url, body) {
  return fetch(`${config.urls.baseUrl}${url}`, {
    method: 'PATCH',
    headers: config.headers.headers,
    body: JSON.stringify(
      body
    )
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(res.status);
    })
}

function queryPostRequests(config, url, body) {
  return fetch(`${config.urls.baseUrl}${url}`, {
    method: 'POST',
    headers: config.headers.headers,
    body: JSON.stringify(
      body
    )
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      Promise.reject(res.status);
    })
}

function queryDeleteRequests(config, url, cardId) {
  return fetch(`${config.urls.baseUrl}${url}/${cardId}`, {
    method: 'DELETE',
    headers: config.headers.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      Promise.reject(res.status);
    })
}

export {queryGetRequests, queryPatchRequests, queryPostRequests, queryDeleteRequests}
