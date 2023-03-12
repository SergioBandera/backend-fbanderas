# API

### Create API base package

`npm init -y`

`npm install --save express`

`npm install nodemon dotenv esm`

set in `package.json` scripts:

`"api": "nodemon -r dotenv/config -r esm api/index.js"`

`"start": "node -r dotenv/config -r esm api/index.js"`

create file `.env`

```
NAME=API_NAME
#NODE_ENV=production
PORT=3000

```

create dir `api`

create file `index.js` in `/api`

```
import express from "express";
import http from 'http';

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (q, r) =>
  r.send(`${process.env.NAME} API is connected and ready!!! 🚀`)
);

http.createServer(app)
    .listen(process.env.PORT);

console.log(`${process.env.NAME} server ready and listening on port ${process.env.PORT}! 🚀  Go to ${`http://localhost:${process.env.PORT}/`}`);

```

Test and run API

`npm run api`

### Divide code

create file `app.js` in `/api`

```
import express from "express";

const app = express();

app.use(express.json({ limit: "20mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (q, r) =>
  r.send(`${process.env.NAME} API is connected and ready!!! 🚀`)
);

export default app;

```

modify `index.js`

```
import http from 'http';
import app from './app.js';

http.createServer(app)
    .listen(process.env.PORT);

console.log(`${process.env.NAME} server ready and listening on port ${process.env.PORT}! 🚀  Go to ${`http://localhost:${process.env.PORT}/`}`);

```

### Secure api with Helmet

Install package `npm install helmet --save`

set in `app.js`

```
import helmet from "helmet";
...
app.use(helmet());

```

Default:

```
Content-Security-Policy: default-src 'self';base-uri 'self';font-src 'self' https: data:;form-action 'self';frame-ancestors 'self';img-src 'self' data:;object-src 'none';script-src 'self';script-src-attr 'none';style-src 'self' https: 'unsafe-inline';upgrade-insecure-requests
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Resource-Policy: same-origin
Origin-Agent-Cluster: ?1
Referrer-Policy: no-referrer
Strict-Transport-Security: max-age=15552000; includeSubDomains
X-Content-Type-Options: nosniff
X-DNS-Prefetch-Control: off
X-Download-Options: noopen
X-Frame-Options: SAMEORIGIN
X-Permitted-Cross-Domain-Policies: none
X-XSS-Protection: 0

```

### Allow CORS

Install package `npm install cors --save`

set in `app.js`

```
import cors from "cors";
...
app.use(cors());

```

Default:

```
"origin": "*",
"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
"preflightContinue": false,
"optionsSuccessStatus": 204

```

### Dockerizing API

Create Docker file `touch Dockerfile`

```
FROM node:16

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

USER  node

# RUN npm install
# If you are building your code for production
RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node . .

EXPOSE 3000
CMD [ "npm", "start" ]

```

Create Docker file `touch docker-compose.yml`

```
version: '3'

services:
  api:
    build:
      context: .
      dockerfile: Dockerfile
    image: api-base
    container_name: api-base
    restart: always
    env_file: .env
    ports:
      - "80:3000"
    volumes:
      - .:/home/node/app
      - node_modules:/home/node/app/node_modules

    networks:
    - app-network

networks:
  app-network:
    driver: bridge

volumes:
  node_modules:

```

Create Docker file `.dockerignore`

```
.git
.gitignore
node_modules
npm-debug.log
Dockerfile*
README.md
LICENSE
.vscode
.env

```

Build Docker container

`sudo docker build --tag api-base .`

Run Docker container

`sudo docker run --env-file=.env --publish 80:3000 api-base`

List Docker container

`sudo docker ps -q`

kill Docker container

`sudo docker kill 61012c1933bf`

## Structure

```
expressjs-api
├── api
│   ├── core
│   ├── middleware
│   ├── routes
│   ├── app.ts
│   └── index.ts
├── .dockerignore
├── .env
├── docker-compose.yml
├── Dockerfile
└── package.json

```

### Routes

```
│ ├── routes
│       └── route1
│           ├── controllers
│           └── model

```

```
NO OLVIDARSE DE PONER EN APP.JS EL APP USE CON LA TABLA QUE SE QUIERE AÑADIR
endpoints:
/clientes (create)
/clientes/list
/clientes/:id(getOne, update, delete)
/empleados (create user)
/empleados/:id(getOne user, update user)


```
