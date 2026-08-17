module.exports = {
  apps: [
    {
      name: "calldiesel",
      cwd: `${process.env.HOME}/calldiesel`,
      script: ".output/server/index.mjs",
      interpreter: "node",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        HOST: "127.0.0.1",
        PORT: "3011",
        NITRO_HOST: "127.0.0.1",
        NITRO_PORT: "3011",
      },
    },
  ],
};
