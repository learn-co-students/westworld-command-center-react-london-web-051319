import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';
import {getAreas, getHosts} from './assets/API'


class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHost: 1
  }

  componentDidMount() {
    getAreas().then(areas => this.setState({ areas }))
    getHosts().then(hosts => this.setState({ hosts }))
  }

  activeHosts = () => {
    return this.state.hosts.filter(host => host.active)
  }

  inactiveHosts = () => {
    return this.state.hosts.filter(host => !host.active)
  }

  updateSelectedHost = host_id => {
    this.setState({selectedHost: host_id})
  }

  selectedHost = () => {
    return (this.state.selectedHost === null || this.state.hosts.length === 0) ? null : this.state.hosts.find(host => host.id === this.state.selectedHost)
  }

  updateHostDetails = updatedHost => this.setState({hosts: this.state.hosts.map(host => host.id === updatedHost.id ? updatedHost : host)})

  toggleActiveAll = () => this.setState({hosts: this.state.hosts.map(host => ({...host, active: !this.state.hosts.every(host => host.active)}))})

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.activeHosts()} handleHostClick={this.updateSelectedHost} />
        <Headquarters areas={this.state.areas} hosts={this.inactiveHosts()} selectedHost={this.selectedHost()} handleHostClick={this.updateSelectedHost} handleHostChange={this.updateHostDetails} toggleActiveAll={this.toggleActiveAll} allActive={this.state.hosts.every(host => host.active)}/>
      </Segment>
    )
  }
}

export default App;
