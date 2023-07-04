import React from "react";
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl p-4">LOGIN</h1>
      <form className="flex max-w-md flex-col">
        <div>
          <div className=" block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            placeholder="namakamu@gmail.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="block">
            <Label htmlFor="password1" value="Password" />
          </div>
          <TextInput id="password1" required type="password" />
        </div>
        <Link
          href=""
          className="text-right text-xs text-green-500 text-semibold mt-1"
        >
          lupa password?
        </Link>

        <button className="submit btn btn-active btn-accent mt-4">Login</button>
        <div className="flex justify-center text-xs">
          <p>Tidak memiliki akun?</p>
          <Link to="/signup" className="text-green-500 ml-1">
            buat akun
          </Link>
        </div>
      </form>
    </>
  );
};

export default Login;
