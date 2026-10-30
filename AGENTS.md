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

## Portfolio architecture
- Keep shareable portfolio sections in separate TanStack leaf routes with a shared shell in the root route, so navigation and metadata remain consistent.
- Keep portfolio facts and project records in a browser-safe shared module, so CV, home, and project pages use the same content.
- Contact submissions use a validated public server function and a service-only, rate-limited database procedure; visitors cannot read messages, and owner email sends require a verified sender domain.
- Theme preference is browser-local presentation state; the permanent portrait is imported from a CDN asset pointer and shared across Home and About.
- Project photographs are illustrative concepts rather than claimed screenshots; skill percentages describe category share of the listed toolkit, not unverified proficiency.
