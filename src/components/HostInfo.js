import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'
// import { hostname } from 'os';


const HostInfo = ({host, areas, handleChange}) => {
  const {firstName, active, imageUrl, gender, area} = host
  const options = areas.map(area => ({key: area.name, value: area.name, text: area.name.split('_').map(name => name.slice(0,1).toUpperCase() + name.slice(1)).join(" ")}))

  const changeArea = (value) => {
    const area = areas.find(area => area.name === value)
    if (area.hostCount === area.limit) {
      alert('Cannot add another to that area as at limit.')
    } else {
      handleChange({...host, area: value})
    }
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
                onChange={() => handleChange({...host, active: !active})}
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
