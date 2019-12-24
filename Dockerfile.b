FROM node:12
WORKDIR /app
COPY package.json package.json
RUN npm set registry http://52.130.87.235:4873/
RUN npm install
COPY . .
RUN npm run build
EXPOSE 80
CMD ["node","dist/main.js"]


