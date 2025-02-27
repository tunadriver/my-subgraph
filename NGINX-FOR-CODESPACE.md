sudo apt update

sudo apt install -y nginx

nginx -v

sudo nginx -t

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

sudo service nginx restart

service 

echo "PORT=8545" >> ~/.env

ngrok http 8545

curl -X POST https://potential-space-potato-jjrxv7q69pgw3p44j-8545.app.github.dev/ \
     -H "Content-Type: application/json" \
     --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'


=============
Run the following command to open the configuration file:

sudo nano /etc/nginx/nginx.conf

server_names_hash_bucket_size 128;

==================

sudo nginx -s reload

==============
Check that Nginx is listening to port 8545 and redirecting properly

sudo netstat -tulpn | grep :8545

sudo ss -tulpn | grep :8545

sudo service nginx status  


=====================
Add the following configuration to nginx.conf:

location / {
  add_header 'Access-Control-Allow-Origin' '*' always;
  add_header 'Access-Control-Allow-Methods' 'GET, POST, OPTIONS';
  add_header 'Access-Control-Allow-Headers' 'Authorization, Content-Type';
  if ($request_method = OPTIONS) {
    return 204;
  }
}

