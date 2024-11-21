"use client";

import { FC } from "react";
import { Connector, useConnect, useAccount } from "wagmi";

const Header: FC = () => {
  const { connectors, connect } = useConnect();
  const { address } = useAccount();

  return (
    <div className="flex justify-between">
      <div className="flex w-[160px] h-6">
        <img src="icon.svg" />
        <span className="w-full flex justify-center text-xl">PowerSwap</span>
      </div>
      <div>
        :
        <button
          className="bg-cyan-400 py-2 px-2 rounded-full text-white font-bold"
          onClick={() => connect({ connector: connectors[1] })}
        >
          {address
            ? address.slice(0, 5) + "..." + address.slice(-5)
            : "connect button"}
        </button>
      </div>
    </div>
  );
};
export default Header;
