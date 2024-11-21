"use client";

import { WagmiProvider } from "wagmi";
import { config } from "@/config/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <div>
          <Header />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
