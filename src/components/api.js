function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  Promise.reject(res.status);
}

function queryGetRequests(config, url) {
  return fetch(`${config.urls.baseUrl}${url}`, config.headers)
    .then(checkResponse)
}

function queryPatchRequests(config, url, body) {
  return fetch(`${config.urls.baseUrl}${url}`, {
    method: 'PATCH',
    headers: config.headers.headers,
    body: JSON.stringify(
      body
    )
  })
    .then(checkResponse)
}

function queryPostRequests(config, url, body) {
  return fetch(`${config.urls.baseUrl}${url}`, {
    method: 'POST',
    headers: config.headers.headers,
    body: JSON.stringify(
      body
    )
  })
    .then(checkResponse)
}

function queryDeleteRequests(config, url, cardId) {
  return fetch(`${config.urls.baseUrl}${url}/${cardId}`, {
    method: 'DELETE',
    headers: config.headers.headers
  })
    .then(checkResponse)
}

function queryPutRequests(config, url, cardId) {
  return fetch(`${config.urls.baseUrl}${url}/${cardId}`, {
    method: 'PUT',
    headers: config.headers.headers
  })
    .then(checkResponse)
}

export {queryGetRequests, queryPatchRequests, queryPostRequests, queryDeleteRequests, queryPutRequests}
