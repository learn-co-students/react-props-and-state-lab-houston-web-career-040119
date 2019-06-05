import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((element) => {
          return  <Pet pet={element} isAdopted={element.isAdopted} onAdoptPet={this.props.onAdoptPet}/> 
        })
      } 
      </div>
    )  
  }
}

export default PetBrowser
