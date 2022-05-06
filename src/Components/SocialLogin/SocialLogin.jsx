import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "react-bootstrap";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();

  let errorMessage;
  if (error || fbError || gitError) {
    errorMessage = (
      <>
        Error: {error?.message} {fbError?.message} {gitError?.message}
      </>
    );
  }

  if (loading || fbLoading || gitLoading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (user || fbUser || gitUser) {
    navigate("/");
  }
  return (
    <>
      <h3 className="py-5">Sign In using Social Media Account</h3>

      <div className="my-5">
        <Button
          variant="outline-danger"
          className="w-100"
          onClick={() => signInWithGoogle()}
        >
          Sign In using <BsGoogle className="mx-2" />
        </Button>
        <Button
          variant="outline-primary"
          className="w-100  my-2"
          onClick={() => signInWithFacebook()}
        >
          Sign In using <FaFacebookF className="mx-2" />
        </Button>
        <Button
          variant="outline-dark"
          className="w-100  my-2"
          onClick={() => signInWithGithub()}
        >
          Sign In using <BsGithub className="mx-2" />
        </Button>
        <p className="warning">{errorMessage}</p>
      </div>
    </>
  );
};

export default SocialLogin;
