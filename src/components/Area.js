import React from 'react'
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = ({ area, hosts, selectHost, selectedHost }) => {
  
  return (
    <div className='area' id={area.name}>
      <h3 className='labels'>{area.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</h3>

      <HostList hosts={hosts} selectHost={selectHost} selectedHost={selectedHost} />

    </div>

  )
}

export default Area

Area.propTypes = {
  hosts: function (area, hosts, propName, componentName) {
    if (hosts.length > area.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${area.name}. The limit for that area is ${area.limit}. You gotta fix that!`
      )
    }
  }
}
