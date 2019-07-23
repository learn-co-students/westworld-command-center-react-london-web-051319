import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, selectHost, selectedHost}) => {

  return(
    <Card.Group itemsPerRow={6}>
      {hosts.map(host => <Host host={host} key={host.id} select={selectHost} selected={selectedHost}/>)}
    </Card.Group>
  )
}

export default HostList
