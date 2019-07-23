import React from 'react'
import { Segment, Button } from 'semantic-ui-react';

const LogPanel = ({handleClick, allActive, logs}) => {

  return(
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => <p key={i} className={log.type}>{log.msg}</p>)}
      </pre>
      
      {/* Button below is the Activate All/Decommisssion All button */}
      <Button
        fluid
        color={allActive ? "green" : "red"}
        /* This isn't always going to be the same color...*/
        content={allActive ? "DECOMMISSION ALL" : "ACTIVATE ALL"}
        /* Should the button always read "ACTIVATE ALL"? When should it read "DECOMMISSION ALL"? */
        onClick={handleClick}
      />
    </Segment>
  )
}

export default LogPanel
