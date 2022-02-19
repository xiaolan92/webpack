FROM node:16.14.0
RUN apt-get update && apt-get install -y nginx
WORKDIR /app

COPY . /app/
EXPOSE 80

ADD package.json  /app/
ADD package-lock.json  /app/
RUN npm config set registry 'https://registry.npm.taobao.org' && npm install 

RUN npm run build && cp -r dist/* /var/www/html  && rm -rf /app
CMD ["nginx","-g","daemon off;"]
