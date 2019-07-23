import React from 'react'
import { Card } from 'semantic-ui-react'
import Host from './Host'

const HostList = ({hosts, handleClick, perRow, selectedHost}) => {

  return(
    <Card.Group itemsPerRow={perRow || 6}>
      {hosts.map(host => <Host key={host.id} host={host} handleClick={() => handleClick(host.id)} selectedHost={selectedHost} />)}
    </Card.Group>
  )
}

export default HostList
