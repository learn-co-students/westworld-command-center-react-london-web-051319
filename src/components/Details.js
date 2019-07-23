import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import * as Images from '../services/Images'
import HostInfo from './HostInfo'


const Details = ({ host, areas, getHosts }) => {

  const renderSomething = () => (<Image size='medium' src={Images.westworldLogo}/>)

  return(
    <Segment id="details" className="HQComps">
      {host ? <HostInfo host={host} areas={ areas } getHosts={ getHosts }/> : renderSomething()}
    </Segment>
  )
}

export default Details
