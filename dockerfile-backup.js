// FROM docker:dind
// # RUN adduser  
// # RUN adduser -S xyz -u 1724 -G root
// RUN apk add --no-cache \
// 	#Install bash shell
// 	bash \
//     # Install Curl
//     curl \
//     # Install Git
//     git \
//     # Install VIM
//     vim &&\
//     # Install the Linux version of the IBM Cloud CLI
//     curl -fsSL https://clis.ng.bluemix.net/install/linux | sh &&\ 
//     # Install the IBM Cloud Kubernetes Service CLI
//     ibmcloud plugin install container-service &&\
//     # Install the IBM Cloud Container Registry CLI
//     ibmcloud plugin install container-registry
// # RUN apk add --no-cache docker-cli
// RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.7/main/ nodejs=8.9.3-r1

// # ENV DOCKER_HOST=tcp://localhost:1234

// # USER xyz

// EXPOSE 3000

// CMD sleep infinity