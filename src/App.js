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
    selectedHost: null
  }

  componentDidMount() {
    getAreas().then(areas => this.setState({ areas }))
    getHosts().then(hosts => this.setState({ hosts }))
  }

  activeHosts = () => {
    return this.state.hosts.map(host => host.id < 10 ? Object.assign({}, host, {active: true}) : host).filter(host => host.active)
  }

  inactiveHosts = () => {
    return this.state.hosts.filter(host => !host.active)
  }

  

  // As you go through the components given you'll see a lot of functional components.
  // But feel free to change them to whatever you want.
  // It's up to you whether they should be stateful or not.

  render(){
    return (
      <Segment id='app'>
        <WestworldMap areas={this.state.areas} hosts={this.activeHosts()}/>
        <Headquarters hosts={this.inactiveHosts()}/>
      </Segment>
    )
  }
}

export default App;
