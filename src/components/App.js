import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptions: {},
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) => {
   
    this.setState({
      filters: {type: event.target.value
      }
    })
  }

  onFindPetsClick = (event) =>{
    (this.state.filters.type=== "all" ? fetch("/api/pets") : fetch(`/api/pets?type=${this.state.filters.type}`))
    .then(res=>res.json())
    .then(data => {
      this.setState({ 
        pets:data
      })
    })
    // .then(()=>{console.log(this.state.pets)}
    // )
  }

  onAdoptPet = (id) =>{
    let pets = this.state.pets
    let pet = pets.find(pet => {return pet.id === id})
    pet.isAdopted = true
    this.setState({
      pets: pets
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
              <Filters onChangeType = {this.onChangeType} onFindPetsClick= {this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets = {this.state.pets} onAdoptPet = {this.onAdoptPet} adoptions={this.state.adoptions}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App
