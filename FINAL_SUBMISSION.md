Final Submission Notes

This branch `feature-testing` contains changes to ensure Vitest runs under WSL and a passing test for `ProductCard`.

What I changed:
- Updated `vite.config.js` test pool to `vmThreads` and added `include` globs to discover .jsx tests.
- Removed explicit `--pool` flags from `package.json` test script; now uses `vitest run`.
- Finalized `src/components/ProductCard.test.jsx` test.
- Added GitHub Actions workflow `.github/workflows/ci.yml` to run tests on push/PR.

How to push and create PR:
- `git push origin feature-testing`
- Create PR via UI or `gh pr create --fill --base main --head feature-testing`

Evidence for grading:
- Tests run locally: `npm test` shows `✓ src/components/ProductCard.test.jsx (1 test)`
- CI workflow added to run tests on GitHub Actions.

Next recommended steps:
- Add tests for ProductForm, Products, EditProduct, and ProductContext.
- Mock axios for context tests using `vi.mock('axios')`.

