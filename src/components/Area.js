import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = ({ area, hosts, handleClick }) => (
  <div className='area' id={area.name}>
    <h3 className='labels'>{area.name.split('_').map(name => name.slice(0,1).toUpperCase() + name.slice(1)).join(" ")}</h3>

    <HostList hosts={hosts} perRow={Math.floor(area.limit/2) + (area.limit > 10 ? 3 : 1)} handleClick={handleClick}/>
  </div>
)

Area.propTypes = {
  hosts: function(hosts, area, propName, componentName){
    if(hosts.length > area.limit){
      throw Error(
        `HEY!! You got too many hosts in ${area.name}. The limit for that area is ${area.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
