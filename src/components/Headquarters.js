import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details'
import ColdStorage from './ColdStorage'
import LogPanel from './LogPanel'


class Headquarters extends Component {
  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage hosts={this.props.hosts} selectedHost={this.props.selectedHost} handleClick={this.props.handleHostClick} />

        </Grid.Column>
        <Grid.Column width={5}>
          <Details host={this.props.selectedHost} areas={this.props.areas} handleChange={this.props.handleHostChange} handleLogs={this.props.handleLogs}/>
        </Grid.Column>
        <Grid.Column width={3}>

        <LogPanel handleClick={this.props.toggleActiveAll} allActive={this.props.allActive} logs={this.props.logs} handleLogs={this.props.handleLogs} />

        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
