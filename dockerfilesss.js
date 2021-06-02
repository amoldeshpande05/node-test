// FROM alpine:3.12

// RUN addgroup --gid 1024 mygroup
// RUN adduser --disabled-password --gecos "" --force-badname --ingroup 1024 myuser
// USER myuser

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
// RUN apk add  --no-cache --repository http://dl-cdn.alpinelinux.org/alpine/v3.7/main/ nodejs=8.9.3-r1


// EXPOSE 3000
// CMD sleep infinity
// # CMD ["/bin/bash"]