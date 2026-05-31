import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { vitePrerenderPlugin } from "vite-prerender-plugin";

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Content-Security-Policy":
    "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self' https://formspree.io; font-src 'self';",
};

export default defineConfig({
  plugins: [react(), vitePrerenderPlugin({ renderTarget: "#root" })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: { headers: securityHeaders },
  preview: { headers: securityHeaders },
});
