FROM node:14 as builder
WORKDIR /app
RUN npm install
COPY . /app
CMD npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
