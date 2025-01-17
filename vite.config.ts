import { defineConfig, UserConfig } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";

// https://vitejs.dev/config/
export default defineConfig((): UserConfig => {
  return {
    plugins: [react(), relay],
  };
});
