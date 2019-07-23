import React, {Component} from 'react';
import './stylesheets/App.css';
import {Segment} from 'semantic-ui-react';
import WestworldMap from './components/WestworldMap';
import Headquarters from './components/Headquarters';
import API from './adapters/API';

class App extends Component {

  state = {
    allHosts: [],
    allAreas: [],
    selectedHost: '',
    coldStorageHosts: []
  }

  componentDidMount() {
    this.getHosts();
    this.getAreas();
  }

  getHosts = () => {
    API.fetchHosts().then(allHosts => this.setState({allHosts}));
  }

  getAreas = () => {
    API.fetchAreas().then(allAreas => this.setState({allAreas}));
  }

  selectHost = selectedHost => {
    this.setState({selectedHost});
  }

  assignHost = (host, area) => {
    API.postHost(host, area)
      .then(res => {
        this.getHosts()
      })
  }

  updateSelectedHost = host => {
    this.selectHost(host)
    this.getHosts()
    this.getAreas()
  }

  activateDecommissionHost = decommission => {
    let activeHosts;

    if (decommission)
      activeHosts = this.state.allHosts.filter(host => host.active)

    if (!decommission)
      activeHosts = this.state.allHosts.filter(host => !host.active)

    activeHosts.forEach(host => API.activateHost(host).then(() => {
      this.getHosts()
      this.getAreas()
    }))
  }

  render() {
    const {allAreas, allHosts, selectedHost, coldStorageHosts } = this.state
    const decommissionAll = (allHosts.filter(host => host.active).length > 0)

    return (<Segment id='app'>
      <WestworldMap
        areas={allAreas}
        hosts={allHosts}
        selectHost={this.selectHost}
        selectedHost={selectedHost}
      />
      <Headquarters
        hosts={ allHosts }
        selectHost={ this.selectHost }
        selectedHost={ selectedHost }
        areas={ allAreas.map(area => ({ key: area.id, value: area.name, text: area.name.split("_").join(" ")}))}
        getHosts={ this.updateSelectedHost }
        decommission={ decommissionAll }
        activateDecommissionHost={ this.activateDecommissionHost }
      />
    </Segment>)
  }
}

export default App;
