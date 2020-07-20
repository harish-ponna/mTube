import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import "../styles/Login.css";
import { keys } from "../configure";
import { SET_USER, REMOVE_USER } from "../Redux/actions/userActions";
import { connect } from "react-redux";
import { userState } from "../Redux/mapReduxStateToProps";
import { Redirect } from "react-router-dom";

const Login = (props) => {
  const { userState, SET_USER } = props;

  const responseGoogleSuccess = (googleResponse) => {
    const {
      tokenObj: { access_token, id_token },
      profileObj: { imageUrl, name, email },
    } = googleResponse;
    return SET_USER({
      name,
      email,
      imageUrl,
      tokenId: id_token,
      accessToken: access_token,
    });
  };

  const responseGoogleFailure = (res) => REMOVE_USER();

  return (
    <div
      className="Login"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
      }}
    >
      {userState.user && <Redirect to="/home" />}
      <GoogleLogin
        style={{ color: "red" }}
        clientId={keys.CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={"single_host_origin"}
        // isSignedIn={true}
      />
    </div>
  );
};

export default connect(userState, { SET_USER })(Login);
