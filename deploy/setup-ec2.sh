#!/usr/bin/env bash
# Add Call Diesel as one more site on an existing Nginx/EC2 box.
# Does not remove other sites or the default site.
#
#   git clone https://github.com/Harishrk21/fuelflow-pro.git "$HOME/calldiesel"
#   cd "$HOME/calldiesel"
#   bash deploy/setup-ec2.sh
set -euo pipefail

APP_DIR="${HOME}/calldiesel"
SITE_SRC="$(cd "$(dirname "$0")" && pwd)/nginx.conf"

echo "==> Node version"
if ! command -v node >/dev/null 2>&1; then
  echo "Node is not installed. Install Node 20 LTS, then re-run this script."
  exit 1
fi
node -v

echo "==> PM2"
if ! command -v pm2 >/dev/null 2>&1; then
  sudo npm install -g pm2
fi

echo "==> App directory ${APP_DIR}"
mkdir -p "${APP_DIR}"

if ! command -v nginx >/dev/null 2>&1; then
  echo "Nginx is not installed."
  exit 1
fi

echo "==> Adding Nginx site calldiesel (other sites are left alone)"
sudo cp "${SITE_SRC}" /etc/nginx/sites-available/calldiesel
sudo ln -sfn /etc/nginx/sites-available/calldiesel /etc/nginx/sites-enabled/calldiesel
sudo nginx -t
sudo systemctl reload nginx

echo "==> Done. Call Diesel uses 127.0.0.1:3011 only."
echo "Other PM2 apps and Nginx sites were not restarted or removed."
echo "After the first GitHub deploy and DNS:"
echo "  sudo certbot --nginx -d www.calldiesel.in -d calldiesel.in"
