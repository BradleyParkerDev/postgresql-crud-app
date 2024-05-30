declare namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      // Add other environment variables here
      TEST_DB: string;
    }
  }
  