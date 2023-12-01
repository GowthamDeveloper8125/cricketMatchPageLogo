import './index.css'

const LatestMatch = props => {
  const {lastMatchDetails} = props
  const teamName = lastMatchDetails.competing_team
  const dateDetails = lastMatchDetails.date
  const VenueDetails = lastMatchDetails.venue
  const resultDetails = lastMatchDetails.result
  const TeamLogo = lastMatchDetails.competing_team_logo
  const firstInnings = lastMatchDetails.first_innings
  const secondInnigs = lastMatchDetails.second_innings
  const umpiresDetails = lastMatchDetails.umpires
  const manOfTheMatch = lastMatchDetails.man_of_the_match

  return (
    <div className="LastMatchMainContainer">
      <div>
        <h1>{teamName}</h1>
        <p>{dateDetails}</p>
        <p>{VenueDetails}</p>
        <p>{resultDetails}</p>
      </div>
      <div>
        <img
          src={TeamLogo}
          alt={`latest match${teamName}`}
          className="team banner"
        />
      </div>
      <div>
        <p>{teamName}</p>
        <p id="firstInnings">first_innings</p>
        <label htmlFor="firstInnings">{firstInnings}</label>

        <p id="secondInnings">second_innings</p>
        <label htmlFor="secondInnings">{secondInnigs}</label>

        <p id="manOfTheMatch">man_of_the_match</p>
        <label htmlFor="manOfTheMatch">{manOfTheMatch}</label>

        <p id="umpires">umpires</p>
        <label htmlFor="umpires">{umpiresDetails}</label>
      </div>
    </div>
  )
}

export default LatestMatch
