// Write your code here
import {Component} from 'react'
import './index.css'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
  }

  changeItems = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    const searchList = destinationsList.filter(eachObject =>
      eachObject.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-container">
        <h1> Destination Search </h1>
        <div>
          <input
            type="search"
            placeholder="Search"
            onChange={this.changeItems}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="image"
          />
        </div>
        <ul>
          {searchList.map(eachItem => (
            <DestinationItem searchItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
