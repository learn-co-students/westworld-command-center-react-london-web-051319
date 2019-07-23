import React from 'react';
import '../stylesheets/Area.css'
import HostList from './HostList'

const Area = ({ area, hosts }) => (
  <div className='area' id={area.name}>
    <h3 className='labels'>{area.name.split('_').map(name => name.slice(0,1).toUpperCase() + name.slice(1)).join(" ")}</h3>

    <HostList hosts={hosts}/>
  </div>
)

Area.propTypes = {
  hosts: function(props, propName, componentName){
    if(props.hosts.length > props.limit){
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      )
    }
  }
}

export default Area;
