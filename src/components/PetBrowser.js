import React from 'react'

import Pet from './Pet'



class PetBrowser extends React.Component {
  constructor (){
    super() 
    this.state = {
      buttonPressed: false 
    }
  }

  renderPets = () => {
  return  this.props.pets.map(pety => <div className="ui cards"><Pet pet= {pety}  onAdoptPet= {this.props.onAdoptPet}/></div>)
  }
  

 
  render() {
    return(
    <div>
       {this.renderPets()}
     </div>
    )
  }
}

export default PetBrowser
