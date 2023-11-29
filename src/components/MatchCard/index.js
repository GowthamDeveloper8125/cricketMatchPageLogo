// Write your code here// Write your code here
import './index.css'

const MatchCard = props => {
  const {listItem} = props
  const teamName = listItem.competing_team
  const teamLogo = listItem.competing_team_logo
  const teamResult = listItem.result
  const teamStatus = listItem.match_status

  console.log('Team name')
  return (
    <div className="MatchCardMainContainer">
      <img src={teamLogo} alt={teamName} className="teamLogoImage" />
      <h1 className="MatchCardTeamName">{teamName}</h1>
      <p className="TeamResult">{teamResult}</p>
      <p className="TeamStatus">{teamStatus}</p>
    </div>
  )
}

export default MatchCard
