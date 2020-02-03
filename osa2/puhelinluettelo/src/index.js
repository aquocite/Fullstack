import ReactDOM from 'react-dom'
import React, { useState, useEffect } from 'react'
import AddPerson from './components/AddPerson'
import PrintPersons from './components/PrintPersons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const addPerson = (event) => {

    event.preventDefault()

    if(persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already in the book`)
      return
    }

    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length+1
    }

    axios
    .post('http://localhost:3001/persons', personObject)
    .then(response => {
      setPersons(persons.concat(response.data))
      setNewName('')
      setNewNumber('')
    })

    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <AddPerson addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
        </div>
      <h2>Numbers</h2>
        <div>
          <PrintPersons persons={persons} />
        </div>
    </div>
  )

}

ReactDOM.render(<App />, document.getElementById('root'))

//export default App
