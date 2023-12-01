// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {
    Banner: '',
    lastMatch: '',
    recentMatchesDetails: [],
    loader: true,
  }

  componentDidMount() {
    this.getApiDetails()
  }

  getApiDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const lastMatchDetails = data.latest_match_details
    const recentMataches = data.recent_matches
    const teamImage = data.team_banner_url
    const team = lastMatchDetails.competing_team
    this.setState({
      Banner: teamImage,
      lastMatch: lastMatchDetails,
      recentMatchesDetails: recentMataches,
      loader: false,
    })
    console.log(data, team)
  }

  render() {
    const {Banner, lastMatch, recentMatchesDetails, loader} = this.state
    console.log(recentMatchesDetails)
    return (
      <div className="TeamMatchesMainContainer">
        <div>
          <img
            src={Banner}
            alt="team banner"
            className="TeamMatchesBannerImage"
          />
        </div>
        <div>
          <LatestMatch lastMatchDetails={lastMatch} />
        </div>
        <div>
          {loader ? (
            <Loader type="TailSpin" width={50} height={50} color="blue" />
          ) : (
            <div className="MatchCardContainer" data-testid="loader">
              {recentMatchesDetails.map(eachItem => (
                <li className="listOne" key={eachItem.id}>
                  <MatchCard listItem={eachItem} />
                </li>
              ))}
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default TeamMatches
