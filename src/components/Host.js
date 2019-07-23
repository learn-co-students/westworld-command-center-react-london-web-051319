import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({host, select, selected}) => {

  return(
    <Card
      className={(selected === host) ? "host selected" : "host"} 
      onClick={() => select(host)}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
