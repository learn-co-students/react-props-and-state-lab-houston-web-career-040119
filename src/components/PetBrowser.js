import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component 
{

  onAdoptPet = (id) => {
    this.props.onAdoptPet(id)
  }
  
  render() 
  {
    return <div className="ui cards">{/*isAdopted={(Object.keys(this.props.adoptions).find(id => {return id === pet.id})===undefined)?false:true}*/}
      {this.props.pets.map(pet => <Pet pet={pet} onAdoptPet = {this.props.onAdoptPet}  />)}  </div>
  }
}

export default PetBrowser
