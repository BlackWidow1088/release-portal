import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { logInSuccess } from '../../../actions';
import { connect } from 'react-redux';
import axios from 'axios';
import { gapi } from 'gapi-script';
import logo from '../../../assets/img/brand/diamanti_full.png'
import { GoogleLogin } from 'react-google-login';
/* global gapi */
class Login extends Component {
  GoogleAuth
  SCOPE = 'profile';
  // SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
  constructor(props) {
    super(props);
    this.state = {
      googleAuthLoaded: false
    }
  }
  loginBackend(user) {
    let email = user.w3.U3;
    let name = user.w3.ig;
    axios.post('/user/login', { email: email, name: name })
      .then(res => {
        if (res.data && res.data.role === 'ADMIN') {
          this.props.logInSuccess({ email: email, name: name, isAdmin: true, role: res.data.role });
        } else {
          this.props.logInSuccess({ email: email, name: name, isAdmin: false, role: res.data.role });
        }
        this.props.history.push('/');
      })
      .catch(err => {
        alert('login failed')
        console.log('post error')
      })
  }
  onLoginFailed = (err) => {
    console.log('login failed ', err)
  }
  //a1xGwnaKFGC2A55Cy72bxMq1
  componentDidMount() {
    window.gapi.load('auth2', () => {



      // this.GoogleAuth.isSignedIn.listen((data) => this.setSigninStatus(data));
      this.auth2 = gapi.auth2.init({
        // 'apiKey': 'AIzaSyCswiq9I_E8n2bgQ5IYZhb7jQvERX8pUJs',
        'apiKey': 'AIzaSyAxV1LfUI_TIjiQ2b8rW0fVYdMwHPeKQTYY',
        // client_id: '271454306292-sm8tpgju5dkupvnunqmnfiuk0hej3e4l.apps.googleusercontent.com',
        //secret: dJ8apT9Nx0HIe97MOotO9W1K
        client_id: '271454306292-fnma4vrg7dssj2opv4jovof9v8uq8n1l.apps.googleusercontent.com',
        'scope': this.SCOPE,
        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
      }).then(() => {
        this.GoogleAuth = gapi.auth2.getAuthInstance();
        this.setState({ googleAuthLoaded: true })
        this.setSigninStatus();
      });
    });

  }
  setSigninStatus(isSignedIn) {
    // console.log(isSignedIn);
    if (this.GoogleAuth) {
      let user = this.GoogleAuth.currentUser.get();
      let isAuthorized = user.hasGrantedScopes(this.SCOPE);
      if (isAuthorized) {
        this.loginBackend(user)
      } else {
        console.log('could not login')
      }
    }
  }


  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <Card style={{
                width: '16rem',

                boxShadow: '2px 4px 8px 4px rgba(1, 210, 81, 0.4)'
              }}>
                <CardBody>
                  <div>
                    {/* <p>You are not signed in. Click here to sign in.</p> */}
                    <div style={{
                      backgroundImage: `url(${logo})`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      width: '200px',
                      height: '48px'
                    }}></div>
                    {/* <div id="loginButton">Login with Google</div> */}
                    {
                      this.state.googleAuthLoaded &&
                      <div style={{ textAlign: 'center' }}>
                        <GoogleLogin
                          clientId="271454306292-fnma4vrg7dssj2opv4jovof9v8uq8n1l.apps.googleusercontent.com"
                          buttonText="Login"
                          onSuccess={(d) => this.setSigninStatus(d)}
                          onFailure={(f) => this.onLoginFailed(f)}
                          cookiePolicy={'single_host_origin'}
                        />
                      </div>
                    }
                    {
                      !this.state.googleAuthLoaded &&
                      <div>Please wait while Google Auth is loading...</div>
                    }
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div >
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.auth.currentUser,
})

export default connect(mapStateToProps, { logInSuccess })(withRouter(Login));

