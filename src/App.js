import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  }

  componentDidMount() {
    axios.get('//api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC')
      .then(response => {
        this.setState({
          gifs: response.data.data,
          loading: false
        })
      })
      .catch(err => {
        console.log('Error fetching and parsing data' + err)
      })
  }

  performSearch = (query) => {
    axios.get(`//api.giphy.com/v1/gifs/search?q=${query}&limit=32&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({
          gifs: response.data.data
        })
      })
      .catch(err => {
        console.log('Error fetching and parsing data' + err)
      })
  }

  render() {
    console.log(this.state.gifs)
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch</h1>
            <SearchForm
              onSearch = {this.performSearch}
            />
          </div>
        </div>
        <div className="main-content">
          {
            (this.state.loading)
            ? <p> Loading ... </p>
            : <GifList
               data = {this.state.gifs}
              />
          }
        </div>
      </div>
    );
  }
}
