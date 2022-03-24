import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { createGlobalStyle } from 'styled-components'
import reportWebVitals from './reportWebVitals'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Results from './pages/Results'
import Freelances from './pages/Freelances'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import { ThemeProvider, SurveyProvider } from './utils/context'
import GlobalStyle from './utils/style/GlobalStyle'
import Profile from './pages/Profile'

// const GlobalStyle = createGlobalStyle`
//     div {
//         font-family: 'Trebuchet MS', Helvetica, sans-serif;
//     }
// `

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <ThemeProvider>
            <SurveyProvider>
                <GlobalStyle />
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/survey/:questionNumber">
                        <Survey />
                    </Route>
                    <Route exact path="/results">
                        <Results />
                    </Route>
                    <Route exact path="/freelances">
                        <Freelances />
                    </Route>
                    <Route path="/profile/:id" render={(props) => <Profile {...props} />} />
                    <Route path="*">
                        <Error />
                    </Route>
                </Switch>
                <Footer />
            </SurveyProvider>
        </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
