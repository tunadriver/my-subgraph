# 1
sudo ln -s /etc/nginx/sites-available/hardhat /etc/nginx/sites-enabled/
ln: failed to create symbolic link '/etc/nginx/sites-enabled/hardhat': File exists
sudo nginx -t
nginx: [warn] server name "https://stunning-garbanzo-v6gv95xrrp6pfx697-8545.app.github.dev" has suspicious symbols in /etc/nginx/sites-enabled/hardhat:3
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful


==============
fix: sudo rm /etc/nginx/sites-enabled/hardhat
