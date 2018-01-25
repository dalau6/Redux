import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navigation } from 'components'
import { HomeContainer, PopularContainer } from 'containers'

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='container'>
          <Navigation />
          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route path='/popular' component={PopularContainer} />
            <Route render={() => <h1 className='home-container title'>Four oh Four</h1>} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App