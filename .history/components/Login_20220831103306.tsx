import { useMetamask } from "@thirdweb-dev/react";
import React from "react";

function Login() {
  const connectWithMetamask = useMetamask();

  return (
    <div className="bg-[#32143e] h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center mb-10">
        <img
          className="rounded-full h-30 w-30 mb-10"
          src="https://yt3.ggpht.com/Icbp8wymqNkM5UyS_83XIrytKPNVT_wfHOpODP04MOLCBV3trdzSu9_X6tpbLcnrhTfkzdVxoQ=s88-c-k-c0x00ffffff-no-rj-mo"
          alt=""
        />
        <h1 className="text-6xl text-white font-bold"> DRAW</h1>
        <h2 className="text-white">
          Get started by logging in with your MetaMask
        </h2>

        <button
          className="bg-white px-8 py-5 mt-10 rounded-lg shadow-lg font-bold"
          onClick={() => connectWithMetamask()}
        >
          Login with Metamask
        </button>
      </div>
    </div>
  );
}

export default Login;
