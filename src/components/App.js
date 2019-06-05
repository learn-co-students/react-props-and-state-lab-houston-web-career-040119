import React from 'react'

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

  onChangeType = (event) => {
    // console.log(event.target.value)
    this.setState({
      filters: {
        type: event.target.value
      }
    })
  }

  fetchAnimals = (type) => {
    let url
    type==='all'?url = '/api/pets' : url = `/api/pets?type=${type}`
    fetch(url)
    .then(res => res.json())
    .then(obj => {
      return this.setState({
        pets: obj
      })
    })
    
  }

  onFindPetsClick = () => {
    this.fetchAnimals(this.state.filters.type)
  }

  onAdoptPet = (id) => {
    let pet = this.state.pets.find(pet => pet.id === id)
    pet.isAdopted = true
    this.setState({
      pets: this.state.pets
    })
    // fetch('/api/pets', {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type':'application/json'
    //   },
    //   body:{
        
    //   }
    // })
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
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
