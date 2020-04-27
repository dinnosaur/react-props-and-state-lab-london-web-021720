import React from 'react'
import fetchmock from '../fetch-setup.js'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  setSelection = (selection) => {
    this.setState({
      filters:{
        type: selection
      }
    })
  }

  fetchPets = () => {
    this.state.filters.type === "all" ? this.fetchAll() : this.fetchIndividual()
  }

  fetchAll = () => {
    fetch(`/api/pets`)
    .then(promise => promise.json())
    .then(data => this.setState({
      pets: data
    })

    )}
  fetchIndividual = () => {
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(promise => promise.json())
    .then(data=> this.setState({
      pets: data
    })
    )}

  adoptPet = (id) => {
    
  const index =  this.state.pets.findIndex(pet => pet.id === id)
  this.state.pets[index].isAdopted = true 
  // this.state.pets[index].isAdopted = true 
   this.setState({
     pets: this.state.pets
   })
    }

  



  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType ={selection => this.setSelection(selection)} onFindPetsClick ={click => this.fetchPets()} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets}  onAdoptPet = {id => this.adoptPet(id)} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
