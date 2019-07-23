import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

const LogPanel = ({handleClick, allActive, logs}) => {

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      <Button
        fluid
        color={allActive ? "green" : "red"}
        content={allActive ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        onClick={handleClick}
      />
    </Segment>
  )
}

export default LogPanel
