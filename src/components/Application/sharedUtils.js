import React from 'react';
import { Link } from "react-router-dom";
 
export const Template = (props) => (
  <div>
    <section className="hero is-primary resource-hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title is-1">
            &lt;Application /&gt;
          </h1>
          <h2 className="subtitle is-4">
            สมัครเข้าร่วมแข่งขัน
          </h2>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">{props.children}</div>
    </section>
  </div>
);

export const LoginPage = (props) => props.loginPending ? 
(
  <Template>
    <p className="paragraph has-text-centered">
      Logging in...
    </p>
  </Template>
) :
(
  <Template>
    <p className="paragraph has-text-centered">
      Please login with GitHub to proceed.
    </p>
    <p className="register-button"><a onClick={props.loginWithGithub} className="button is-warning is-focused is-large login"><i className="fa fa-github" />&nbsp;&nbsp;Login with GitHub</a></p>
    <p className="has-text-centered">
      <Link to="/rules">Rules & FAQs</Link>
    </p>
    <p className="has-text-centered">
      <Link to="/prizes">Prizes</Link>
    </p>
  </Template>
);

export const Instructions = () => (
  <div className="content wide-paragraph small">
    <ul>
      <li>Hackathon starts on <b> Friday June, 23 2017 20:00</b> (UTC+7), please set a reminder!</li>
      <li>In the meantime, you can watch videos about PWA <Link to="/resources">here</Link></li>
      <li>You can RSVP on Facebook event to subscribe for updates <a href="https://www.facebook.com/events/213868832464170/">here</a></li>
      <li>If you submit multiple applications, older application will be discarded</li>
    </ul>
  </div>
);

export const SubmittedPage = ({ application }) => {
  const total = application.teamCount;
  const current = 1 + Object.keys(application.members || {}).length;
  const remaining = total - current;
  return (
    <Template>
      <h2 className="title has-text-centered">
        Your application has been submitted!<br/><br/>
        {current} / {total} member registered
      </h2>
      {}
      {
        remaining === 1 &&
        <p className="wide-paragraph has-text-centered">
          Please forward following link to the other team member
        </p>
      }
      {
        remaining > 1 &&
        <p className="wide-paragraph has-text-centered">
          Please forward following registration link to the other {remaining} team members.
        </p>
      }
      {
        remaining > 0 &&
        <p className="wide-paragraph has-text-centered small">
          <input className="input has-text-centered" onClick={(e) => e.target.select() } readOnly value={`https://pwa.online.hackathon.in.th/apply/${application.key}`} />
        </p>
      }
      <Instructions />
    </Template>
  );
};

export const validate = values => {
  const errors = {};
  const requiredFields = ['teamName','teamCount','githubRepoUrl','firebaseProjectId','shippingAddress',
  'email','firstName','lastName','mobile','tshirtSize'];
  if (values.githubRepoUrl && !values.githubRepoUrl.match(/^(https?:\/\/)?github.com\/[\w-_]+\/[\w-_]+$/g)) {
    errors.githubRepoUrl = 'Invalid GitHub\'s repository URL'
  }
  if (values.firebaseProjectId && !values.firebaseProjectId.match(/^[a-z0-9-]+$/g)) {
    errors.firebaseProjectId = 'Invalid Firebase Project ID'
  }
  if (values.mobile && !values.mobile.match(/^0[0-9]{9}$/g)) {
    errors.mobile = 'Invalid mobile phone number'
  }
  if (values.teamCount && (parseInt(values.teamCount, 10) < 1 || parseInt(values.teamCount, 10) > 5)) {
    errors.teamCount = 'Your team must have 1-5 members'
  }
  requiredFields.map((field) => {
    if (!values[field] || values[field].length === 0) {
      errors[field] = 'Required';
    }
    return null;
  })
  return errors;
};