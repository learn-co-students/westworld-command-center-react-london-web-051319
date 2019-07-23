const apiEndpoint = 'http://localhost:4000'
const HOSTS_URL = `${apiEndpoint}/hosts`
const AREAS_URL = `${apiEndpoint}/areas`

const fetchHosts = () => {
  return fetch(HOSTS_URL)
  .then(resp => resp.json())
}

const fetchAreas = () => {
  return fetch(AREAS_URL)
  .then(resp => resp.json())
}

export default {
  fetchHosts,
  fetchAreas
}