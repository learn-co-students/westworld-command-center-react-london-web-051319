import React from 'react'
import '../stylesheets/Headquarters.css'
import { Grid } from 'semantic-ui-react'
import Details from './Details'
import ColdStorage from './ColdStorage'

const Headquarters = ({ hosts, selectHost, selectedHost, areas, toggleActivation, changeArea }) => {
  // Remember, there's many ways to do this. This doesn't have to be a class component. It's up to you.

  return (
    <Grid celled='internally'>
      <Grid.Column width={8}>

        {<ColdStorage hosts={hosts} selectHost={selectHost} selectedHost={selectedHost} areas={areas}/>}

      </Grid.Column>
      <Grid.Column width={5}>
        <Details host={selectedHost} hosts={hosts} areas={areas} toggleActivation={toggleActivation} changeArea={changeArea}/>
      </Grid.Column>
      <Grid.Column width={3}>

        {}

      </Grid.Column>
    </Grid>
  )
}

export default Headquarters
