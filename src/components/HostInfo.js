import '../stylesheets/HostInfo.css'
import React from 'react'
import { Radio, Icon, Card, Grid, Image, Dropdown, Divider } from 'semantic-ui-react'

const areaToOption = (area, areaName) => ({
  text: areaName,
  key: areaName,
  value: area.name
})

const HostInfo = ({ hosts, host, areas, changeArea, toggleActivation }) => {
  const handleChange = (e, { value }) => {
    let newArea = areas.find(area => area.name === value)
    let hostsInArea = hosts.filter(host => host.area === value)

    if (newArea.limit <= (hostsInArea.length)) return
    changeArea(host, value)
  }

  const name = host.firstName
  const { imageUrl, gender } = host

  const toggle = () => {
    toggleActivation(host)
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={imageUrl}
          floated='left'
          size='small'
          className='hostImg'
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {name} | { (gender === 'Male') ? <Icon name='man' /> : <Icon name='woman' />}
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={toggle}
                label={host.active ? 'Active' : 'Decommissioned'}

                checked={!!host.active}
                slider
              />
            </Card.Meta>

            <Divider />
              Current Area:
            <Dropdown
              onChange={handleChange}
              value={host.area}
              options={
                areas.map(area => areaToOption(area, area.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')))
                }
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  )
}

export default HostInfo
