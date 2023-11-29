// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {Banner: '', teamName: '', lastMatch: '', recentMatchesDetails: []}

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
      teamName: team,
      lastMatch: lastMatchDetails,
      recentMatchesDetails: recentMataches,
    })
    console.log(data, team)
  }

  render() {
    const {Banner, teamName, lastMatch, recentMatchesDetails} = this.state
    console.log(recentMatchesDetails)
    return (
      <div className="TeamMatchesMainContainer">
        <div>
          <img src={Banner} alt={teamName} className="TeamMatchesBannerImage" />
        </div>
        <div>
          <LatestMatch lastMatchDetails={lastMatch} />
        </div>
        <div className="MatchCardContainer">
          {recentMatchesDetails.map(eachItem => (
            <li className="listOne" key={eachItem.id}>
              <MatchCard listItem={eachItem} />
            </li>
          ))}
        </div>
      </div>
    )
  }
}

export default TeamMatches
