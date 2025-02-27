sudo apt update
sudo apt install -y nginx

nginx -v

sudo nano /etc/nginx/sites-available/hardhat
==============
server {
    listen 80;
    server_name potential-space-potato-jjrxv7q69pgw3p44j-8545.app.github.dev;

    location / {
        proxy_pass http://127.0.0.1:8545;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;

        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'GET, POST, OPTIONS';
        add_header Access-Control-Allow-Headers 'Content-Type, Authorization';
    }
}

=============
sudo ln -s /etc/nginx/sites-available/hardhat /etc/nginx/sites-enabled/

sudo nginx

sudo service restart nginx

service 

echo "PORT=8545" >> ~/.env

ngrok http 8545

curl -X POST https://potential-space-potato-jjrxv7q69pgw3p44j-8545.app.github.dev/ \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
