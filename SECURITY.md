# Security policy

This repository contains the public profile, portfolio documentation and static
website for `honeyamn10-source`. It does not run a server or store credentials.

## Reporting a vulnerability

Please do **not** open a public issue for an exploitable vulnerability, a
credential, or a private detail.

Use GitHub's private vulnerability reporting for this repository when it is
available. If it is not available, open a minimal public issue that says only
"security report requested" and include the technical details through the
contact method linked from the [GitHub profile](https://github.com/honeyamn10-source).

Include:

- the affected file, URL or workflow;
- the impact and how you reproduced it;
- any safe proof-of-concept, without real secrets or personal data.

## Expected response

Reports are reviewed as time allows. You should receive an acknowledgement
once the report is understood. Fix priority depends on impact; confirmed
credential exposure is treated as urgent and should be rotated immediately by
the owner.

## Scope

In scope:

- the static site under `website/`;
- documentation under the repository root;
- GitHub Actions workflows under `.github/workflows/`.

Out of scope:

- third-party services linked from the profile;
- repositories maintained separately by this account;
- denial-of-service testing against GitHub Pages or GitHub Actions.

## Safe contributions

Do not commit `.env` files, API keys, tokens, private keys or personal data.
Fake credentials are acceptable only inside clearly named test fixtures in
repositories that have tests; they are not expected in this documentation
repository. GitHub secret scanning and push protection are enabled.
