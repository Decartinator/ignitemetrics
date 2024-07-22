import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuth } from "../../components/Login/AuthContext";
import { useNavigate } from "react-router-dom";
import SignupForm from "../../components/Signup/SignupForm";
function SignupPage() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex w-full h-screen bg-blue-900">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <SignupForm></SignupForm>
      </div>

      <div className="hidden relative lg:flex items-center  justify-center h-full w-1/2 bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg"></div>
      </div>
    </div>
  );
}

export default SignupPage;
