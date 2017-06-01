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

const Form = (props) => {
  const { handleSubmit, githubUser, submitFailed, invalid } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field required component={inputField} name="teamName" label="Team Name" />
      <Field required component={inputField} name="teamCount" label="Number of Team Member" type="number" parse={intParser} />
      <Field required component={inputField} name="githubRepoUrl" label="GitHub Repository URL" placeholder="https://github.com/user/repo">
        <p className="sub-text">Please create a blank public repository to use in this hackathon and fill in the link below. Click <a href="https://github.com/new" target="_blank">here</a> to create one.</p>
      </Field>
      <Field required component={inputField} name="firebaseProjectId" label="Firebase Project ID" placeholder="test-project">
        <p className="sub-text">Please create a Firebase project for this hackathon. You can add new one at <a href="https://console.firebase.google.com" target="_blank">Firebase console</a>.</p>
      </Field>
      <Field required component={textareaField} name="shippingAddress" label="Shipping Address">
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
  const initialValues = loggedIn ? {
      email: state.application.githubUser.email,
      photoURL: state.application.githubUser.photoURL,
      teamCount: 1,
      uid: state.application.githubUser.uid
    } : null;
  return {
    githubUser: state.application.githubUser,
    initialValues,
  };
}, {
})(reduxForm({
  form: 'application',
  validate,
})(Form));
