import React from 'react'
import PrintPerson from './PrintPerson'

const PrintPersons = (props) => {
  return (
    <div>
      <ul>
        {props.persons.map((person, i) => <PrintPerson key={i} name={person.name} number={person.number}/>)}
      </ul>
    </div>
  )
}

export default PrintPersons
