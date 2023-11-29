// Write your code here
import {Component} from 'react'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: []}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const Response = await fetch('https://apis.ccbp.in/ipl')
    const listData = await Response.json()
    const {teams} = listData
    const UpdatedList = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamList: UpdatedList})
  }

  render() {
    const {teamList} = this.state
    return (
      <div className="HomeMainContainer">
        <div className="LogoContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="LogoImage"
          />

          <h1>IPL Dashboard</h1>
        </div>
        <div className="HomeListContainer">
          {teamList.map(eachItem => (
            <TeamCard list={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    )
  }
}

export default Home
