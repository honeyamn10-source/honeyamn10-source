# Repository presentation and release checklist

## Applied

- Original profile artwork and project covers.
- Separate client-work presentation for Akal School Boha.
- Goraya listings removed from the portfolio.
- Structured bug reports, feature requests, pull-request templates and contribution guides for Jawa Restaurant, Jawa Retail, Classy Renovations and Auto Shift.
- Auto Shift's original application code licensed under MIT, with dependency notices retained.
- Licensing-status documents for the three business applications; no blanket relicensing of imported code or client assets.
- Auto Shift CI checks for its local API, approval gate, upstream compatibility and browser fixture.

## Repositories maintained via this account

Descriptions and topics on every repository are current and were set intentionally. Pins, Discussions, security settings, visibility and deletion remain medium-confidence operations this session does not perform blindly. None of the operational settings should be described as enabled purely because this document mentions them.

Deletion requested: GORAYA-IMI and GORAYA-nns. Their portfolio references have been removed; the repositories have not been deleted.

## Useful settings to review in GitHub

Review the account's available free options and existing configuration before changing anything:

- Accurate descriptions, a small set of relevant topics, and verified website links.
- Issues for user-facing products; the new forms appear when Issues is enabled.
- Dependency alerts and secret scanning where available for the repository and plan.
- Private vulnerability reporting where available.
- Discussions only when there is a real need and someone can moderate them.
- Release artifacts produced from a validated commit.
- Branch protection appropriate to the repository's collaborators and CI.

Do not enable Pages on a private product merely for visibility, expose private code, enable paid services, or advertise a demo that has not been deployed.

## Building an audience

1. Pick one product and one user problem for each release.
2. Publish a short real screen recording showing that workflow.
3. Provide an installation path that a new user can reproduce.
4. Explain known limits and answer reproducible issues.
5. Share useful release notes in relevant communities, following their rules.

Do not buy stars, create fake activity, copy another project's identity, or send unsolicited promotional messages. Public attention and commercial demand are outcomes to earn, not settings GitHub can guarantee.

## Existing products

Passing a documentation or deployment check does not certify the application. The POS editions remain controlled pilots. Classy Renovations' lockfile and server-build failures have been repaired; live database and provider workflows still require acceptance testing. The trading research project's test dependencies were repaired and its full suite passes in CI. These remain engineering work, not reasons to remove checks or claim a completed commercial release.

## Engineering validation — September 2026

- **Punch.trade:** declared the missing `numpy` and `scipy` dependencies so the test job can collect the suite. All 437 backend tests pass in [GitHub Actions](https://github.com/honeyamn10-source/punch.trade/actions).
- **Galaxy:** repaired a corrupt `backend/main.py` (broken WebSocket handler and metrics route syntax) and the `setup-go` cache input type. The full test, lint and Docker validation CI now passes on main.
- **Hoey Editor:** removed an unused, unavailable dependency pin, corrected OCR confidence conversion, and fixed CI import resolution. 21 backend tests pass in [GitHub Actions](https://github.com/honeyamn10-source/hoeyeditor/actions/workflows/ci.yml), including numeric and text OCR confidence cases. OCR results in these regression tests are mocked.
- **Voice Order System:** broadened the API entry point tests (CORS, method and message validation, oversized-conversation rejection, validated order persistence) and fixed the SAVE_ORDER block-strip regex revealed by those tests. [API checks pass](https://github.com/honeyamn10-source/voice-order-system/actions/workflows/blank.yml).
- **Classy Renovations:** corrected ESLint configuration, missing bcrypt types, asynchronous cookies, decimal rendering, report response types, Prisma metadata and worker model access, and Redis dependency duplication. The standalone production build passes locally. Health and login return 200; unauthenticated expense, card and report API requests return 401. [Server CI](https://github.com/honeyamn10-source/classy-renovation/actions/workflows/nextjs.yml) records the remote result.
- **Open-source libraries:** pyagent (133 tests), envguard (145 tests) and tickstore (104 tests) each run a Python 3.9–3.13 matrix, CLI smoke check and CodeQL analysis in CI. Dependabot is active on every code repository; green, low-risk dependency and GitHub Actions bumps are merged as they land.

These checks do not establish production readiness. Dependency security updates, configured service integration, deployment and customer acceptance remain separate work.
