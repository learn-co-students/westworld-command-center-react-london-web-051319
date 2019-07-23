import React from 'react';
import '../stylesheets/Host.css'
import { Card } from 'semantic-ui-react'

const Host = ({ host, selectedHost, handleClick }) => {
  console.log(host.id, selectedHost)
  return(
    <Card
      className={host.id === selectedHost.id ? "host selected" : "host"}
      onClick={handleClick}
      image={host.imageUrl}
      raised
    />
  )
}

export default Host
