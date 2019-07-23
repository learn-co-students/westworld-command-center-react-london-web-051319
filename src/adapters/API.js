const hostsUrl = 'http://localhost:4000/hosts';
const areasUrl = 'http://localhost:4000/areas';

function fetchAreas() {
  return fetch(areasUrl)
    .then(res => res.json())
}

function fetchHosts() {
  return fetch(hostsUrl)
    .then(res => res.json())
}

function activateHost(host) {
  return fetch(`${hostsUrl}/${host.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...host,
      active: !host.active,
    })
  }).then(res => res.json())
}

function changeHostArea(host, area) {
  return fetch(`${hostsUrl}/${host.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...host,
      area: area,
    })
  }).then(res => res.json())
}

export default {
  fetchAreas,
  fetchHosts,
  activateHost,
  changeHostArea
}
