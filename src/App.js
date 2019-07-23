import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import API from './adapters/API';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters'


class App extends Component {

  state = {
    hosts: [],
    areas: [],
    selectedHost: null
  }

  componentDidMount() {
    API.fetchHosts()
    .then(hosts => this.setState({hosts}))
    API.fetchAreas()
    .then(areas => this.setState({areas}))
  }

  selectHost = (selectedHost) => {
    this.setState({ selectedHost })
  }

  toggleActivation = (newHost) => {
      newHost.active = !newHost.active
      newHost.authorized = !newHost.authorized
      let index = this.state.hosts.findIndex(host => host.id === newHost.id)
      let newHostsArray = this.state.hosts
      newHostsArray[index] = newHost
      this.setState({
        hosts: newHostsArray
      })
  }

  changeArea = (newHost, area) => {
    newHost.area = area
    let index = this.state.hosts.findIndex(host => host.id === newHost.id)
      let newHostsArray = this.state.hosts
      newHostsArray[index] = newHost
      this.setState({
        hosts: newHostsArray
      })
  }

  render(){

    const mapHosts = this.state.hosts.filter(host => host.authorized)
    const HQHosts = this.state.hosts.filter(host => !host.authorized)

    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} 
        selectHost={this.selectHost} 
        hosts={mapHosts} 
        selectedHost={this.state.selectedHost}/>
        <Headquarters areas={this.state.areas} 
        hosts={HQHosts} 
        selectHost={this.selectHost}
        selectedHost={this.state.selectedHost}
        toggleActivation={this.toggleActivation}
        changeArea={this.changeArea}/>
      </Segment>
    )
  }
}

export default App;
