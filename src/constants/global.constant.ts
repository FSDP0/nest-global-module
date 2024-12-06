export const GLOBAL_CONSTANT = {
  PATH: {
    PROJECT: {
      get ROOT_DIR(): string {
        return process.cwd();
      }
    },
    ENVIRONMENT: {
      get ENV_DIR(): string {
        return "env";
      }
    }
  }
};
