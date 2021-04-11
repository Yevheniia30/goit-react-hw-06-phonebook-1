import React, { Component } from 'react';

// import shortid from 'shortid';
import s from './App.module.css';
import Form from './Components/Form';
import ContactsList from './Components/ContactsList';
import Filter from './Components/Filter';

class App extends Component {
  render() {
    return (
      <div className={s.App}>
        <h1>Phonebook</h1>
        <Form />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </div>
    );
  }
}

export default App;
