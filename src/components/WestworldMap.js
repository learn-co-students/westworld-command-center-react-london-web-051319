import React from 'react';
import { Segment } from 'semantic-ui-react';
import Area from './Area'


const WestworldMap = ({areas, hosts, handleHostClick, selectedHost}) => {

  return (
    <Segment id="map" >
      {areas.map(area => <Area key={area.id} area={area} hosts={hosts.filter(host => host.area === area.name)} handleClick={handleHostClick} selectedHost={selectedHost}/>)}
    </Segment>
  )
}

export default WestworldMap
