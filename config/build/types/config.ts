export type BuildMode = "production" | "development";

export interface BuildPaths {
  entry: string;
  dist: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptopns {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
}
