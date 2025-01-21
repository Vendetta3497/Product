import { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptopns } from "./types/config";

export function buildDevServer(options: BuildOptopns): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
  };
}
