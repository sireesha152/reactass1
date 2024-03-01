import {Component} from 'react'
import ListItems from '../ListItems'
import './index.css'

class Browser extends Component {
  state = {searchInput: ''}

  onChange = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    filteredList = initialHistoryList.filter(eachItem => eachItem.id !== id)
  }

  render() {
    const {searchInput} = this.state
    const {initialHistoryList} = this.props
    const filteredList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg_container">
        <div className="histry_container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image"
          />

          <div className="search_container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search_image"
            />
          </div>

          <input
            type="search"
            placeholder="Search History"
            className="search_input"
            value={searchInput}
            onChange={this.onChange}
          />
        </div>
        if (filteredList === []){}
        {
          <div className="list_container">
            <p>There is no history to show</p>
          </div>
        }
        else{}
        {
          <div className="list_container">
            <ul>
              {filteredList.map(eachItem => (
                <ListItems
                  listItem={eachItem}
                  key={eachItem.id}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }
}

export default Browser
