import React from 'react';
import { Segment, Card } from 'semantic-ui-react'
import Host from './Host'

const ColdStorage = ({hosts, selectedHost, handleClick}) => (
  <Segment.Group className="HQComps">
    <Segment compact>
      <h3 className="labels">ColdStorage</h3>
    </Segment>
    <Segment compact>

    <Card.Group itemsPerRow={10}>
      {hosts.map(host => <Host host={host} selectedHost={selectedHost} handleClick={() => handleClick(host.id)}/>)}
    </Card.Group>

    </Segment>
  </Segment.Group>
)

export default ColdStorage
