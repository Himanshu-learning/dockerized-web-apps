reating docker container in regular method
docker run -d -p 8080:8080 himanshu/nodejs-web-app:v1

# Attaching volume and running nodeJS
docker run -d -p 8001:8080 -v $(pwd):/app --name node-webapp-cont himanshu/nodejs-web-app:v1
curl -i localhost:8001


docker run -d -v $(pwd):/app -p 8002:5001  -e PORT=5001 --name node-web-app-cont-v3  himanshu/nodejs-web-app:v1

docker run -d -v $(pwd):/app -p 8003:5010  --env-file ./.env  --name node-web-app-env-cont  himanshu/node-web-app:v2
