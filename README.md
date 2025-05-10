# Playwright multiple projects and `--last-failed` issues

`--last-failed` CLI flag is ambigous when multiple projects have different `outputDir`.

---

We have two projects `a` and `b` (see [./playwright.config.ts](./playwright.config.ts))

- each has a different output dir `test-results/a` and `test-results/b`
- each has 1 test file, 2 tests (1 passing and 1 failing)

```sh
# Initial - run two projects, all tests
$ npx playwright test

Running 4 tests using 1 worker

  ✘  1 [a] › a.spec.ts:3:5 › a-001 (5ms)
  ✓  2 [a] › a.spec.ts:7:5 › a-002 (4ms)
  ✓  3 [b] › b.spec.ts:3:5 › b-001 (5ms)
  ✘  4 [b] › b.spec.ts:7:5 › b-002 (3ms)

# Next run, filter by project b, only previously failed tests
# ❌ should run only 1 failed test
$ npx playwright test --last-failed --project b

Running 2 tests using 1 worker

  ✓  1 [b] › b.spec.ts:3:5 › b-001 (4ms)
  ✘  2 [b] › b.spec.ts:7:5 › b-002 (3ms)

```
