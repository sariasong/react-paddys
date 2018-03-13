import React from 'react';
import axios from 'axios';
import Form from './Form';

class Dish extends React.Component {
  state = { menu: {}, edit: false }

  componentDidMount() {
    const { match: { params: { id } } } = this.props
    axios.get(`/api/menus/${id}`)
      .then( res => this.setState({ menu: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !state.edit }
    })
  }

  submit = (product) => {
    axios.put(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu: res.data, edit: false }))
  }

  show = () => {
    const { menu: { dish, description, price, }} = this.state
    return (
      <div>
        <h1>{dish}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
       
      </div>
    )
  }

  edit = () => {
    const { menu } = this.state
    return <Form submit={this.submit} {...menu} />
  }

  render() {
    const { edit } = this.state
    return (
      <div>
        { edit ? this.edit() : this.show() }
        <button onClick={this.toggleEdit}>
          { edit ? 'Cancel' : 'Edit' }
        </button>
      </div>
    )
  }
}

export default Dish;