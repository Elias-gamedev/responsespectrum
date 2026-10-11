<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project architecture
- Use TanStack file-based routes for the five public pages, with shared chrome in the root layout, so navigation and page metadata stay consistent.
- Keep company services and project categories in a browser-safe data module, so page previews and filters share a single content source.
- Keep downloaded project photography as real image files under `src/assets` imported directly by the data module, with the CDN pointer files kept only as provenance records, so the site renders identically when hosted outside Lovable.
- Keep an explicit no-photo state for projects whose photograph could not be verified, so unrelated architecture is never presented as project evidence.
- Keep this site frontend-only and the contact form explicitly unconfigured, because no message delivery service is authorized.
- Select the deploy target with the `NITRO_PRESET` build-time variable (`vercel.json` sets it for Vercel) instead of editing `vite.config.ts`, so the Lovable build keeps its Cloudflare default.
