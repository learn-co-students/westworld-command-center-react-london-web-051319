import React, { Component } from 'react';
import './stylesheets/App.css'
import { Segment } from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';
import {getAreas, getHosts} from './assets/API'
import Log from './services/Log';


class App extends Component {
  state = {
    areas: [],
    hosts: [],
    selectedHost: 1,
    logs: []
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

  currentActive = () => this.state.hosts.every(host => host.active)

  toggleActiveAll = () => {
    this.setState({hosts: this.state.hosts.map(host => ({...host, active: !this.currentActive()}))})
    this.addLog(this.currentActive() ? Log.notify('Decommissiong all hosts.') : Log.warn('Activating all hosts!'))
  }

  areas = () => {
    return this.state.areas.map(area => ({...area, hostCount: this.state.hosts.filter(host => host.area === area.name).length}))
  }

  addLog = (log) => {
    this.setState({logs: [log, ...this.state.logs]})
  }

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.areas()} hosts={this.activeHosts()} handleHostClick={this.updateSelectedHost} selectedHost={this.selectedHost()} />
        <Headquarters areas={this.areas()} hosts={this.inactiveHosts()} selectedHost={this.selectedHost()} handleHostClick={this.updateSelectedHost} handleHostChange={this.updateHostDetails} toggleActiveAll={this.toggleActiveAll} allActive={this.currentActive()} logs={this.state.logs} handleLogs={this.addLog}/>
      </Segment>
    )
  }
}

export default App;
