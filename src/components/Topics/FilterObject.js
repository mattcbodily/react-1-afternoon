import React, { Component } from 'react';

class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      family: [
        {
          name: 'Matt',
          member: 'Dad',
          age: 26,
        },
        {
          name: 'Cassidy',
          member: 'Mom'
        },
        {
          name: 'Lily',
          age: 1
        }
      ],

      userInput: '',
      filteredFamily: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterFamily(prop) {
    var familyMembers = this.state.family;
    var filteredFamilyMembers = [];
    
    for ( var i = 0; i < familyMembers.length; i++ ) {
      if ( familyMembers[i].hasOwnProperty(prop) ) {
        filteredFamilyMembers.push(familyMembers[i]);
      }
    }

    this.setState({ filteredFamily: filteredFamilyMembers });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.family, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
        <button className="confirmationButton" onClick={ () => this.filterFamily(this.state.userInput) }> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered: { JSON.stringify(this.state.filteredFamily, null, 10) } </span>
      </div>
    )
  }
}

export default FilterObject