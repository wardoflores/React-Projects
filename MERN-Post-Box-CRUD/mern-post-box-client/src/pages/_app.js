//import '@/styles/globals.css'

//export default function App({ Component, pageProps }) {
//  return <Component {...pageProps} />
//}

// Responsible for the default view of the application
// Displays the retrieve and render all of the Records we insterted when doing HTTP request using postman.

import React from "react";
import './App.css';
import './index.css';
import PostMessages from "./components/PostMessages";
import { Container, Typography, AppBar } from "@mui/material";
import "@emotion/react";

// Refers to `store.js`
import { Provider } from "react-redux"; 
import { store } from "./actions/store"

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Post Box
          </Typography>
        </AppBar>
        <PostMessages />
      </Container>
    </Provider>
  );
}

export default App;
