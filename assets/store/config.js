const config = { version: "dev", base: "" };
if (config.version == "{{ .Version }}") {
  config.version = "dev";
  config.base = "";
} else {
  config.version = config.version.replace(/^v/, "");
}

export default config;
