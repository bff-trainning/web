FROM node:12

WORKDIR /btcconnectedoauthservice

# Install NPM deps
COPY package.json package.json
# Point to internal npm registry
RUN npm install
COPY . .

# Bundle app source
RUN npm run-script build

# Start server
EXPOSE 80
CMD ["node", "dist/main.js"]
