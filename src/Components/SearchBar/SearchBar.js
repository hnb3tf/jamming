import React from 'react';

import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }

  this.search = this.search.bind(this);
  this.handleTermChange = this.handleTermChange.bind(this);
   
  }

  
search() {
  this.props.onSearch(this.state.term);
}

handleTermChange(event) {
  this.setState({ term: event.target.value });

}

  render() {
    return (
      <div className="SearchBar">
         <input onChange={this.handleTermChange} placeholder="enter name, song, or artist" />
         <button className="SearchButton"
         onClick={this.search} >SEARCH</button>
      </div>
    )
  }
}

export default SearchBar;