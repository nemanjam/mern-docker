# Mern Docker

## Containers

* `client` with React on `https://localhost:3000` route
* `server` with Express on `https://localhost:5000` route
* `mongo` with MongoDB
* `adminmongo` with AdminMongo on `http://localhost:1234` route

## Usage

`docker-compose up -d` or for every container separately `docker-compose up -d client server adminmongo`

Get in to container and install more dependecies with `docker exec -it server /bin/sh` or `docker exec -it client /bin/sh` and then `npm install whatewer`.

Get logs from container to check everything is running correctly with `docker logs --tail 50 server` or `docker logs --tail 50 client`

Shut down containers with `docker-compose down`.

If you change `Dockerfile` rebuild container with `docker-compose build server`. Container names are `client`, `server`, `mongo` and `adminmongo`.

Access React app on `http://localhost:3000` and test the server on `https://localhost:5000/api/message`. Generate your own ssl keys and put them in `/security` folder if you like. Connection to the mongodb is in the `/config/dev.js`. Access adminmongo on `http://localhost:1234`.

## Credits

CRUD Todo app repo is here [seeschweiler/mern-stack-part-04](https://github.com/seeschweiler/mern-stack-part-04) and the link of the tutorial is here [The MERN Stack Tutorial — Building A React CRUD Application From Start To Finish](https://medium.com/codingthesmartway-com-blog/the-mern-stack-tutorial-building-a-react-crud-application-from-start-to-finish-part-1-d8d701c2995).

Docker tutorial is here [How to create a full stack React/Express/MongoDB app using Docker](https://medium.freecodecamp.org/create-a-fullstack-react-express-mongodb-app-using-docker-c3e3e21c4074).

Don't be confused there are some changes in the code to make it work. 

## Additional notes

Tested on Windows using Ubuntu 18.04 VirtualBox guest. 

For nodemon restart to work there is `-L` flag in `"server": "nodemon -L server.js"` in `package.json`. 

For create-react-app to live reload there is `CHOKIDAR_USEPOLLING=true` environment var in `docker-compose.yml`. 

For mongo volume to work in the Windows VirtualBox shared folder there is `volumes: mongodata:`. 

Note that `command` in the `docker-compose.yml` overrides the `CMD` in the `Dockerfile`.
