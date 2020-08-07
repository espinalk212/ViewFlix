import React from 'react';


class SearchForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      results: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  


  handleInputChange(type) {
    return e => this.setState({ [type]: e.currentTarget.value }, () => this.props.fetchVideoInfo(this.state.query))
  }

    
    handleSubmit(e) {
      e.preventDefault();
      this.props.fetchVideoInfo(this.state.query)
    }


  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input className='search-input' onClick={e => e.stopPropagation()}
            type="text"
            placeholder="search by title, genres"
            onChange={this.handleInputChange("query")}
          />
        </form>
    )
  }
}

export default SearchForm;