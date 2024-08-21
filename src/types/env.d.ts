declare namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      // Add other environment variables here
      NEON_HTTP_DATABASE_URL: string;
      NEON_POOL_DATABASE_URL: string;
      LOCAL_DATABASE_URL: string;
      ACCESS_TOKEN_SECRET_KEY:string;
    }
  }
  