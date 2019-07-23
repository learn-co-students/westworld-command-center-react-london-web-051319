import React from 'react';
import '../stylesheets/Host.css'
import {Card} from 'semantic-ui-react'

const Host = ({host, selectHost, selectedHost}) => {

  return (<Card className={'host' + (
      selectedHost.id === host.id
      ? ' selected'
      : '')} onClick={() => selectHost(host)} image={host.imageUrl} raised="raised"/>)
}

export default Host
