# node-gitops-app

Application repo for the GitOps demo.

- `src/logic.js`  — pure logic (unit-tested)
- `src/server.js` — Express server (endpoint-tested)
- `tests/`        — logic tests + endpoint tests
- `Dockerfile`    — builds the container image

Run locally:
```
npm install
npm test
npm start
```

CI (GitHub Actions) tests, builds the image, and updates the image tag
in the separate `node-gitops-config` repo, which ArgoCD watches.
