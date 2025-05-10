import { devices, PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  retries: 0,
  workers: 1,
  timeout: 500,

  expect: {
    timeout: 500,
  },

  projects: [
    {
      name: "a",
      testMatch: "a.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
      },
      outputDir: "test-results/a",
    },
    {
      name: "b",
      testMatch: "b.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
      },
      outputDir: "test-results/b",
    },
  ],
};

export default config;
