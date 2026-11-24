# Updating the website

After editing files or replacing assets:

```bash
cd ~/Desktop/website
git checkout main
git add -A
git commit -m "Describe the update"
git push

COMMIT=$(git rev-parse HEAD)
git checkout custom-domain-ready
git cherry-pick "$COMMIT"
git push
git checkout main
```

A push to `main` automatically updates GitHub Pages.
