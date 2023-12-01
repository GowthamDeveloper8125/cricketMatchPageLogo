// Write your code here
import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {list} = this.props
    const {teamImageUrl, name, id} = list
    return (
      <Link to={`/team-matches/${id}`}>
        <div>
          <li className="TeamCardListContainer">
            <img src={teamImageUrl} alt={name} className="TeamCardImage" />
            <div>
              <p className="TeamCardTeamName">{name}</p>
            </div>
          </li>
        </div>
      </Link>
    )
  }
}

export default TeamCard
