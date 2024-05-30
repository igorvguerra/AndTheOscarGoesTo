import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components';
// import { Profile } from './Pages/Profile';
// import { Home } from './Pages/Home';
// import { Details } from './Pages/Details';´
import { SignIn } from './Pages/SignIn';
import theme from './styles/theme.js';
import GlobalStyles from './styles/global.js';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <SignIn />
    </ThemeProvider>
  </React.StrictMode>,
)
