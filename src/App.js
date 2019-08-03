import React from 'react';
import logo from './logo.svg';
import './App.css';
import Selected from './components/Selected/Selected'
import Input from './components/Input/Input';
// import UserForm from './pages/User/Form';
// import UserList from './pages/User/List';
// import Modal from './components/Modal/Modal';


function App() {
  return (
    <div className="App">
    <Input
      id="nome"
      initialValue="Miranda"
      label="Nome"
      />
      <Selected
      label="Estado"
      list={["SP", "RJ", "MG"]}
      />
    </div>
  );
}

export default App;
