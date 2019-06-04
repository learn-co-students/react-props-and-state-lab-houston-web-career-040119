import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
//import allPets from '../data/pets'

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

  onChangeType = (e) => {
    this.setState({
      filters: {
        type: e.target.value
      }
    })
    console.log(e.target.value)
  }


  onFindPetsClick = () => {
    if (this.state.filters.type == 'all') {
    fetch("/api/pets")
    .then(res => res.json())
    .then(obj => {
      this.setState({
        pets: obj
      })
    })
  }
  else {
    fetch(`/api/pets?type=${this.state.filters.type}`)
    .then(res => res.json())
    .then(obj => {
      this.setState({
        pets: obj
      })
    })
  }
  }//end onFindPetsClick

  onAdoptPet = (id) => {
    this.setState({
      pets: this.state.pets.map(pet => {
        if (pet.id === id) {
          pet.isAdopted = !pet.isAdopted
          return pet
        }
        return pet
      })
    })
    
    
    console.log(id)
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
              <Filters onFindPetsClick={this.onFindPetsClick} onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
