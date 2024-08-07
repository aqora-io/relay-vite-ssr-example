import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    ssr: {
      external: ["react", "react-dom", "react-relay", "relay-runtime"],
      noExternal: true,
    },
    plugins: [react(), relay],
  };
});
