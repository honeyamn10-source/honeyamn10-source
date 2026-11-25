# Contributing

This repository is primarily a profile and portfolio site. Small corrections
are welcome; larger product work belongs in the repository for that product.

## Before you start

- Check whether an issue already describes the change.
- For a bug in another project, use that project's issue tracker instead.
- Do not include real credentials, private keys, personal data or client
  material in issues, pull requests, fixtures or commits.

## Making a change

1. Fork the repository and create a focused branch.
2. Edit only the files needed for the change.
3. Keep links to live, public pages and avoid adding dead project links.
4. Run the local checks:

   ```bash
   python3 - <<'PY'
   from pathlib import Path
   import re

   for path in Path('.').glob('*.md'):
       text = path.read_text(encoding='utf-8')
       for target in re.findall(r'\]\(([^)]+)\)', text):
           if target.startswith(('http://', 'https://', '#', 'mailto:')):
               continue
           if not (Path(target.split('#')[0]).exists()):
               raise SystemExit(f'broken local link in {path}: {target}')
   print('markdown local links ok')
   PY
   ```

5. Open a pull request describing what changed and why.

## Review expectations

- Keep changes readable and reversible.
- Prefer accurate, modest claims over promotional language.
- Do not relicense, copy or expose third-party/client assets.
- CI checks are required before merge.

Security issues should follow [SECURITY.md](SECURITY.md), not a normal pull
request.
