import type { NextPage } from "next";
import { Login } from "../components/Login";
import { Logo } from "../components/Logo";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between p-8 max-w-6xl w-full m-auto">
        <div className="relative flex justify-center items-center">
          <Logo cln="w-72 h-72" />
          <h1 className="absolute left-36 font-medium text-6xl">
            Chameleon
            <span className="font-bold block ml-16 text-blue-300">
              Programmer
            </span>
          </h1>
        </div>
        <Login />
      </div>
    </div>
  );
};

export default Home;
