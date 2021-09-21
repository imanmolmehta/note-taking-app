import React, { Component } from 'react';

class NotesEdit extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentDidMount = () => {
    console.log('NotesEdit mounted');
  }

  render () {
  }
}

export default NotesEdit;
