import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import EnvironmentPlugin from "vite-plugin-environment";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    EnvironmentPlugin([
      "VITE_API_KEY",
      "VITE_API_URI"
    ])
    ,react()],
});
