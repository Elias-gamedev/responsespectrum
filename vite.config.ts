// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Hosting outside Lovable (e.g. Vercel) needs a different deploy target than the
// Cloudflare default. Set NITRO_PRESET in the host's build command to switch it;
// leaving the variable unset keeps the Lovable build exactly as-is.
const deployPreset = process.env.NITRO_PRESET?.trim();

export default defineConfig({
  ...(deployPreset ? { nitro: { preset: deployPreset } } : {}),
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
