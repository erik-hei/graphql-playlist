import React from 'react';
// import logo from './logo.svg';
import './App.css';
import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';

function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
  });

  return (
    <div className="App">
      <h1>Erik's Reading List</h1>
      <BookList client={client} />
    </div>
  );
}

export default App;
