import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <p className={'title'}>Tribal Scout</p>
        <p className={'slogan'}>The real time, cloud based, modular, scalable, growth hack, developer platform</p>
      </div>
    )
  }
}

export default Home