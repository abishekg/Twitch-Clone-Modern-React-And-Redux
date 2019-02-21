import React, { Component } from 'react'
import { connect } from 'react-redux'
import { googleClientId } from '../config';

export class GoogleAuth extends Component {

  state = {
    isSignedIn: null
  }

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: googleClientId,
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange();
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = () => {

    this.setState({ isSignedIn: this.auth.isSignedIn.get() })
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (<div>
        <button
          className="ui red google button"
          onClick={this.onSignOutClick}
        >
          <i className="google icon" />
          Sign Out
      </button>
      </div>);
    } else {
      return (<div>
        <button
          className="ui red google button"
          onClick={this.onSignInClick}
        >
          <i className="google icon" />
          Sign In with Google
      </button>
      </div>);
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default (GoogleAuth)
