FROM node:latest
LABEL maintainer "Joseph Omotosho"
RUN mkdir /app 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
EXPOSE 3000
CMD ["npm" , "start"]