# AWS-MultiContainerWebsite

This multi-container website can be hosted on a single EC2 instance via an automatic deployment by Elastic Beanstalk. 
This approach solves the issues like handling multiple EC2 instances, multiple IP address for server and client. Hence, 
it also solves the problem of Cross Origin Resource sharing (CORS) request failures when we try to access an API from 
another origin.

**Highlights:**
* Docker compose is used to orchestrate multiple containers
* NginX reverse proxy server is used to handle requests on a single port 8080. It then diverts the traffic on suitable
server depending on the URL identifier. Example: 
    - http://localhost:8080/ – Requests to this URL will be forwarded to Client server.
    - http://localhost:8080/api/ – Requests to this URL will be forwarded to API server.
* AWS dockerrun file will automatically create EC2 instance and deploy the containers via Elastic Beanstalk

## Steps to get started
* Install node dependencies for Client and Server. Use command "npm install".
* Build the ReactJS client. Use command _npm run build_.
* To start the application locally, run _docker-compose up_. Make sure you have installed Docker on your machine.
* Push the docker images to a container registry. 
* If you want to host this application on AWS, use Elastic Beanstalk to create a multi-container application. Change the
Docker images' names in the file _Dockerrun.aws.json_. This dockerrun file will fetch the images from the mentioned container
registry where you hosted the containers after creating them.
 
## Authors
* [Vikram Singh](https://linkedin.com/in/neatcoder) - Developer

