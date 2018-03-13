import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Form from './Form';

class Dish extends React.Component {
  state = { menus: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ menus: res.data }) )
  }

  show = () => {
    const { menus } = this.state
    return (
      <ul>
        { menus.map( p =>
            <li key={p.id}>
              <Link to={`/menus/${p.id}`}>{p.dish}</Link>
            </li>
          )
        }
      </ul>
    )
  }

  form = () => {
    return <Form submit={this.submit} />
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  submit = (menu) => {
    const { menus } = this.state
    axios.post('/api/menus', { menu })
      .then( res => {
        this.setState({
          menus: [res.data, ...menus],
          showForm: false
        })
      })
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <h2>Menus</h2>
        <button onClick={this.toggleForm}>
          { showForm ? 'Hide' : 'Show' } 
        </button>
        { showForm ? this.form() : this.show() }
      </div>
    )
  }
}

export default Dish;