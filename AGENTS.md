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
- Store downloaded project photography as CDN asset pointers with source-page provenance in the project data, and use an explicit no-photo state for unverified matches, so unrelated architecture is never presented as project evidence.
- Keep this site frontend-only and the contact form explicitly unconfigured, because no message delivery service is authorized.
