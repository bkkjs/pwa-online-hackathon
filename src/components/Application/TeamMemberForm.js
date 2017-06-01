import React from 'react';
import './Application.css';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { inputField, selectField, textareaField, intParser } from '../../utils/form';
import { validate } from './sharedUtils';

const IndividualInfo = (props) => (
  <div>
    <p className="has-text-centered">
      <img className="profile" alt="profile" src={props.githubUser.photoURL} />
    </p>
    <Field required readOnly component={inputField} name="displayName" label="GitHub Display Name" />
    <Field required readOnly  component={inputField} type="email" name="email" label="Email Address" />
    <Field required component={inputField} name="firstName" label="First Name" />
    <Field required component={inputField} name="lastName" label="Last Name" />
    <Field required component={inputField} name="mobile" label="Mobile Number" placeholder="08xxxxxxxx" />
    <Field required component={selectField} name="tshirtSize" label="T-shirt Size">
      <option>Select t-shirt size</option>
      <option>XS</option>
      <option>S</option>
      <option>M</option>
      <option>L</option>
      <option>XL</option>
      <option>XXL</option>
      <option>XXXL</option>
    </Field>
    <p className="control">
      <label className="checkbox">
        <Field name="optIn" component="input" type="checkbox" />
        &nbsp;I am looking for job opportunity<br />
        <span className="sub-text">You will be contacted by our sponsors for job opportunity</span>
      </label>
    </p>
  </div>
);


const TeamMemberForm = (props) => {
  const { handleSubmit, githubUser, submitFailed, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field readOnly required component={inputField} name="teamName" label="Team Name" />
      <Field readOnly required component={inputField} name="teamCount" label="Number of Team Member" type="number" parse={intParser} />
      <Field readOnly required component={inputField} name="githubRepoUrl" label="GitHub Repository URL" placeholder="https://github.com/user/repo">
        <p className="sub-text">Please create a blank public repository to use in this hackathon and fill in the link below. Click <a href="https://github.com/new" target="_blank">here</a> to create one.</p>
      </Field>
      <Field readOnly required component={inputField} name="firebaseProjectId" label="Firebase Project ID" placeholder="test-project">
        <p className="sub-text">Please create a Firebase project for this hackathon. You can add new one at <a href="https://console.firebase.google.com" target="_blank">Firebase console</a>.</p>
      </Field>
      <Field readOnly required component={textareaField} name="shippingAddress" label="Shipping Address">
        <p className="sub-text">In case that your team is eligible for prizes for gifts, they will be sent to following address.</p>
      </Field>
      <hr />
      <div className="control">
        <IndividualInfo githubUser={githubUser} />
      </div>
      <hr />
      <p className="control">
        <button disabled={submitFailed && invalid} className="button is-primary is-fullwidth" type="submit">Apply</button>
      </p>
    </form>
  );
};

export default connect((state) => {
  const loggedIn = state.application.loggedIn;
  const application = state.application.application;
  const initialValues = loggedIn && application ? {
      ...application,
      email: state.application.githubUser.email,
      displayName: state.application.githubUser.displayName,
      photoURL: state.application.githubUser.photoURL,
      firstName: null,
      lastName: null,
      tshirtSize: null,
      mobile: null,
      optIn: null,
    } : null;
  return {
    githubUser: state.application.githubUser,
    initialValues,
  };
}, {
})(reduxForm({
  form: 'application',
  validate,
})(TeamMemberForm));
