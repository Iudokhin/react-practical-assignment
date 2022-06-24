
import './App.css';
import MainPage from './components/mainPage/MainPage';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { store } from './features/store/store';
import {Provider} from 'react-redux'


function App() {
  return (
    <Provider store={store}>
        <MainPage />
    </Provider>
  );
}

export default App;
