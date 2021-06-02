// FROM alpine:3.11
// RUN adduser -S default -u 1724 -G root
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

// RUN apk add --no-cache git
// RUN git clone https://github.com/operator-framework/operator-sdk


// COPY --from=golang:1.15-alpine /usr/local/go/ /usr/local/go/
// ENV PATH="/usr/local/go/bin:/opt/go/"
// ENV GOPROXY=https://proxy.golang.org|direct

// RUN apk add --no-cache make
// WORKDIR "/operator-sdk"
// RUN make install




// USER default
// CMD ["/bin/bash"]