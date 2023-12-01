// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamList: [], loader: true}

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
    this.setState({teamList: UpdatedList, loader: false})
  }

  render() {
    const {teamList, loader} = this.state
    console.log(loader)
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
        <div data-testid="loader">
          {loader ? (
            <Loader type="TailSpin" height={50} width={50} />
          ) : (
            <div className="HomeListContainer">
              {teamList.map(eachItem => (
                <li key={eachItem.id} className="ListContainer">
                  <TeamCard list={eachItem} />
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
