const submitResume = (resume, cover) => {
  console.log('resume to post', resume)
  return fetch('/api', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({resume: resume, cover: cover})
  })
  .then((response) => {
    console.log('response')
    return response.json()
  })
  .then((json) => {
    return json
  })
  .catch((error) => {
    return error
  });
}

export default submitResume