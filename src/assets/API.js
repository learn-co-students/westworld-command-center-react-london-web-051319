const BASE_URL = 'http://localhost:4000'
const HOSTS_URL = `${BASE_URL}/hosts`
const AREAS_URL = `${BASE_URL}/areas`

const getHosts = () => {
  return fetch(HOSTS_URL).then(resp => resp.json())
}

const getAreas = () => {
  return fetch(AREAS_URL).then(resp => resp.json())
}

export {
  getHosts,
  getAreas
}