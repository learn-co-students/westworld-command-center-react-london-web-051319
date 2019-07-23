import '../stylesheets/HostInfo.css'
import React, {Component} from 'react'
import API from '../adapters/API'
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider
} from 'semantic-ui-react'

class HostInfo extends Component {

  handleChange = (e, {value}) => {
    API.changeHostArea(this.props.host, value)
      .then(host => this.props.getHosts(host))
  }

  toggle = () => {
    API.activateHost(this.props.host)
      .then(host => this.props.getHosts(host))
  }

  render() {
    return (<Grid>
      <Grid.Column width={6}>
        <Image src={this.props.host.imageUrl} floated='left' size='small' className="hostImg"/>
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {this.props.host.firstName}
              | {
                this.props.host.gender === 'Male'
                  ? <Icon name='man'/>
                  : <Icon name='woman'/>
              }
            </Card.Header>
            <Card.Meta>
              <Radio
                onClick={this.toggle}
                label={!this.props.host.active ? "Activate" : "Decommisssion"}
                checked={this.props.host.active ? true : false}
                slider="slider"
              />
            </Card.Meta>

            <Divider/>
            Current Area:
            <Dropdown
              onChange={this.handleChange}
              options={this.props.areas}
              selection="selection"
              value={this.props.host.area}
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>)
  }
}

export default HostInfo
