import React, { Component } from 'react';
import '../stylesheets/Headquarters.css';
import { Grid } from 'semantic-ui-react';
import Details from './Details';
import ColdStorage from './ColdStorage';
import LogPanel from './LogPanel';


class Headquarters extends Component {

  render(){
    return(
      <Grid celled='internally'>
        <Grid.Column width={8}>

        <ColdStorage
          hosts={ this.props.hosts.filter(host => !host.authorized && !host.active) }
          selectedHost={ this.props.selectedHost }
          selectHost={ this.props.selectHost }
        />

        </Grid.Column>

        <Grid.Column width={ 5 }>
          <Details
            host={ this.props.selectedHost }
            areas={ this.props.areas }
            getHosts={ this.props.getHosts }
          />
        </Grid.Column>

        <Grid.Column width={ 3 }>
          <LogPanel
            decommission={ this.props.decommission }
            activateDecommissionHost={ this.props.activateDecommissionHost}
          />
        </Grid.Column>
      </Grid>
    )
  }
}

export default Headquarters;
