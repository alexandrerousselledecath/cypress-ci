![pipeline](https://github.com/alexandrerousselledecath/cypress-test/workflows/pipeline/badge.svg?branch=master)

# cypress-ci

I opened this repository to share the implementation you need, to use Cypress (with or without cucumber plugin) into your CI. For the moment, I just implemented GitHub Actions with several viewpoints (npm, docker container, Cypress GitHub Action), to have a large panel of arrangements.

# Pipeline

The pipeline is triggered when you do a pull request on this repository and when the pull request is merged on `master` default branch.

```yaml
name: pipeline

on:
  push:
    branches:
      - master
  pull_request:
    branches:
      - master
```

You will see multiples jobs into the CI pipeline. There are all differents and describe several ways to do your management with Cypress and GitHub Actions (Cypress GitHub Action or npm). I also added Cucumber to give you an example of how it can be implemented, and a `docker` way with the Cypress GitHub Action for developers who using npm is an obstacle.

For parallelism, I make two different jobs : one just with Cypress, one with Cucumber, with both using matrix strategy provided by GitHub Actions (I used glob patterns).

```yaml
jobs:
  cypress:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2.3.1
      - uses: cypress-io/github-action@v2
        with:
          browser: chrome
          config-file: cypress.json
          headless: true
  
  # to parallelize tests executions 
  cypress-config-matrix:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        cypress-config: ["a", "c"]
    steps:
      - uses: actions/checkout@v2.3.1
      - uses: cypress-io/github-action@v2
        with:
          browser: chrome
          config-file: cypress.json
          spec: "**/${{ matrix.cypress-config }}*.js"
          headless: true

  cypress-docker:
    runs-on: ubuntu-latest
    container: cypress/included:4.9.0
    steps:
      - uses: actions/checkout@v2.3.1
      - uses: cypress-io/github-action@v2
        with:
          browser: chrome
          config-file: cypress.json
          headless: true

  cypress-docker-npm:
    # needs directive to have a synchronous example
    needs: [cypress-docker]
    runs-on: ubuntu-latest
    container: cypress/included:4.9.0
    steps:
      - uses: actions/checkout@v2.3.1
      # npm ci only for cypress-cucumber plugin that is present in plugins/index.js
      # if no install, cannot find module error is thrown
      - run: npm ci
      - run: npm run cy:run

  cucumber:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2.3.1
      - uses: cypress-io/github-action@v2
        with:
          browser: chrome
          config-file: cucumber.json
          headless: true

  cucumber-config-matrix:
    needs: [cucumber]
    runs-on: ubuntu-latest
    strategy:
      matrix:
        cucumber-config: ["ac", "al"]
    steps:
      - uses: actions/checkout@v2.3.1
      - uses: cypress-io/github-action@v2
        with:
          browser: chrome
          config-file: cucumber.json
          spec: "**/${{ matrix.cucumber-config }}*.feature"
          headless: true
```

