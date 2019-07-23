import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
import Log from '../services/Log'
// import { hostname } from 'os';


const HostInfo = ({host, areas, handleChange, handleLogs}) => {
  const {firstName, active, imageUrl, gender, area} = host
  const formatAreaName = areaName => areaName.split('_').map(name => name.slice(0,1).toUpperCase() + name.slice(1)).join(" ")
  const options = areas.map(area => ({key: area.name, value: area.name, text: formatAreaName(area.name)}))

  const changeArea = (value) => {
    const area = areas.find(area => area.name === value)
    if (area.hostCount === area.limit) {
      handleLogs(Log.error(`Too many hosts. Cannot add ${host.firstName} to ${formatAreaName(value)}`))
    } else {
      handleChange({...host, area: value})
      handleLogs(Log.notify(`${host.firstName} set in ${formatAreaName(value)}`))

    }
  }

  const changeActive = () => {
    handleChange({...host, active: !active})
    handleLogs(active ? Log.notify(`Decommissioned ${host.firstName}`) : Log.warn(`Activated ${host.firstName}`))
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated='left'
          size='small'
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {firstName} | { gender === 'Male' ? <Icon name='man' /> : <Icon name='woman' />}x`
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={changeActive}
                label={active ? "Active" : "Decommissioned"}
                checked={active}
                slider
              />
            </Card.Meta>

            <Divider />
            Current Area:
            <Dropdown
              onChange={(e, {value}) => changeArea(value)}
              value={area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo
