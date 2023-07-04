import React from "react";
import { Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <h1 className="font-bold text-center text-2xl p-4">SELAMAT DATANG</h1>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="block">
            <Label htmlFor="Nama Lengkap" value="Nama Lengkap" />
          </div>
          <TextInput
            id="nama"
            placeholder="Nama Lengkap"
            required
            type="text"
          />
        </div>
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
        <div>
          <div className="block">
            <Label htmlFor="password1" value="Konfirmasi Password" />
          </div>
          <TextInput id="password1" required type="password" />
        </div>

        <button className="submit btn btn-active btn-accent mb-4">
          Sign Up
        </button>
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

export default Signup;
