import React from 'react';
import './Dashboard.css';
import moment from 'moment';
import { connect } from 'react-redux';
import { formatTimeCell, getLatest } from '../../utils/time';
import { Link } from "react-router-dom";
import { actions } from '../../redux/reducers/application';

const targetDate = moment('2017-06-23 20:00:00+07:00');
const endDate = moment('2017-06-25 20:00:00+07:00');

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
      isPassed: false,
      isEnded: false,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.clockTick();
    }, 1000);
    this.clockTick();
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  clockTick() {
    const isPassed = targetDate.isBefore(moment());
    const isEnded = endDate.isBefore(moment());
    const duration = isPassed ?
      moment.duration(endDate.diff(moment())) :
      moment.duration(targetDate.diff(moment()));
    if (!isPassed) {
      this.setState({
        day: duration.days(),
        hour: duration.hours(),
        minute: duration.minutes(),
        second: duration.seconds(),
        isPassed,
        isEnded
      });
    } else {
      this.setState({
        hour: Math.floor(duration.asHours()),
        minute: duration.minutes(),
        second: duration.seconds(),
        isPassed,
        isEnded
      });
    }
  }
  getTime(timestamp) {

  }
  render() {
    const { user, publicApplications, announcement, loggedIn } = this.props;
    return (
    <section className="section">
      <div className="container">
        <div className="content">
          <h1 className="title is-4">Dashboard</h1><br />
          <div className="columns">
            {
              !loggedIn &&
              <div className="column">
                <h2 className="title is-5">Application Status</h2><br />
                <p className="register-button"><a onClick={this.props.loginWithGithub} className="button is-warning is-focused is-large login"><i className="fa fa-github" />&nbsp;&nbsp;Login with GitHub</a></p>
              </div>
            }
            {
              loggedIn && !user &&
              <div className="column">
                <h2 className="title is-5">Application Status</h2><br />
                <p>You do not have active application, please register <Link to="/apply">here</Link>.</p>
              </div>
            }
            {
              loggedIn && user &&
              <div className="column">
                <h2 className="title is-5">Application Status</h2><br />
                <p><strong>Team Name:</strong>&nbsp;
                  {user.teamName}
                </p>
                <p><strong>Team Member:</strong>&nbsp;
                  <span className={user.teamCountCurrent !== user.teamCount ? 'red-text' : ''}>{user.teamCountCurrent} / {user.teamCount}</span>
                </p>
                <p><strong>GitHub Repository URL:</strong>&nbsp;
                  <a href={user.githubRepoUrl} target="_blank">{user.githubRepoUrl}</a>
                </p>
                <p><strong>Firebase Project ID:</strong>&nbsp;
                  <a href={`https://${user.firebaseProjectId}.firebaseapp.com`} target="_blank">{user.firebaseProjectId}</a>
                </p>
                <p><strong>Shipping Address:</strong><br />
                  {user.shippingAddress}
                </p>
                {
                  user.teamCountCurrent !== user.teamCount &&
                  <p><strong>Application URL:</strong>&nbsp;
                    <a href={`https://pwa.online.hackathon.in.th/apply/${user.applicationId}`} target="_blank">https://pwa.online.hackathon.in.th/apply/{user.applicationId}</a>
                  </p>
                }
                <h2 className="title is-5">Team Members</h2>
                <ul>
                  <li>{user.firstName} {user.lastName}</li>
                  {
                    user.members && Object.keys(user.members).map((key) =>
                      <li key={key}>{user.members[key].firstName} {user.members[key].lastName}</li>
                    )
                  }
                </ul>
              </div>
            }
            <div className="column">
              <h2 className="title is-5">Competition Status</h2><br />
              {
                (!this.state.isPassed || !this.state.isEnded) &&
                <div>
                  {
                    !this.state.isPassed &&
                    <p className="has-text-centered">Competition will start in</p>
                  }
                  {
                    this.state.isPassed && !this.state.isEnded &&
                    <p className="has-text-centered">Competition will end in</p>
                  }
                  <div className="columns timer has-text-centered">
                    {
                      !(this.state.isPassed && !this.state.isEnded) &&
                      <div className="column">
                        <strong>{this.state.day}</strong><br />Days
                      </div>
                    }
                    <div className="column">
                      <strong>{this.state.hour}</strong><br />Hours
                    </div>
                    <div className="column">
                      <strong>{this.state.minute}</strong><br />Minutes
                    </div>
                    <div className="column">
                      <strong>{this.state.second}</strong><br />Seconds
                    </div>
                  </div>
                </div>
              }
              {
                announcement !== '' &&
                  <div dangerouslySetInnerHTML={{__html: announcement}} />
              }
            </div>
          </div>
          {
            this.props.showLeaderboard &&
            <div>
              <h2 className="title is-5">Leaderboard</h2><br />
              <p>
                <span className="fa fa-wifi" /> = Offline support<br />
                <span className="fa fa-home" /> = Manifest installed
              </p>
              {
                publicApplications.length > 0 &&
                <div className="scrollable">
                  <table className="table leaderboard">
                    <thead>
                      <tr>
                        <th>Rank</th>
                        <th>Team Name</th>
                        <th>Last Commit</th>
                        <th>Last Deployed</th>
                        <th>Submission Form</th>
                        <th>Last Action</th>
                        <th>Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        publicApplications.map((application) => {
                          const {
                            committedAt, deployedAt, formSubmittedAt, rank,
                            teamCount, firebaseProjectId, githubRepoUrl, teamName, completed,
                            lighthouseScore, offlineSupported, manifestSupported,
                          } = application;
                          const lastActionAt = getLatest(committedAt, deployedAt, formSubmittedAt);
                          return (
                            <tr key={teamName} className={completed ? 'done' : ''}>
                              <td>{ rank }</td>
                              <td>{ teamName } ({ teamCount } <span className="fa fa-user" />)</td>
                              {formatTimeCell(committedAt, githubRepoUrl)}
                              {formatTimeCell(deployedAt, `https://${firebaseProjectId}.firebaseapp.com`)}
                              {formatTimeCell(formSubmittedAt)}
                              {formatTimeCell(lastActionAt)}
                              <td>{lighthouseScore} { offlineSupported && <span className="fa fa-wifi" /> } { manifestSupported && <span className="fa fa-home" /> }</td>
                            </tr>
                          );
                        })
                      }
                    </tbody>
                  </table>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </section>
    );
  }
}

export default connect((state) => ({
  announcement: state.dashboard.announcement,
  user: state.dashboard.user,
  publicApplications: state.dashboard.publicApplications,
  loggedIn: state.application.loggedIn,
  showLeaderboard: state.dashboard.showLeaderboard,
}), {
  loginWithGithub: actions.loginWithGithub
})(Dashboard);
