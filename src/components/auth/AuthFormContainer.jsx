import AppLogo from "../app/AppLogo";
import { Link } from "react-router-dom";

const AuthFormContainer = ({ title, children, onSubmit }) => {
  return (
    <div className="flex-1 self-center mx-auto max-w-[450px] w-full">
      <div className="bg-white mx-2 flex flex-col p-6 rounded-md">
        <div className="flex flex-col items-center my-2 px-5">
          <AppLogo />
          <h2 className="text-xl my-2 text-primary font-bold">{title}</h2>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col px-1 space-y-2">
          {children}
        </form>
      </div>

      <p className="text-center text-white my-2">
        {title === "Sign Up"
          ? "Already have an account?"
          : "Don't have an account?"}{" "}
        <Link to={title === "Sign Up" ? "/signin" : "/signup"}>
          {title === "Sign Up" ? "Sign In" : "Sign Up"}
        </Link>
      </p>
    </div>
  );
};

export default AuthFormContainer;
