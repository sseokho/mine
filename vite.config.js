import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      firebase: path.resolve(__dirname, "node_modules/firebase"),
    },
  },
  optimizeDeps: {
    include: ["firebase", "firebase/compat/app", "firebase/compat/auth", "firebase/compat/firestore", "firebase/compat/analytics"],
  },
})
