FROM alpine/k8s:1.20.4
RUN adduser -S xyz -u 1724 -G root

RUN apk add --no-cache \
	#Install bash shell
	bash \
    # Install Curl
    curl \
    # Install Git
    build-base \
    
    git \
    # Install VIM
    make \
    vim &&\
    # Install the Linux version of the IBM Cloud CLI
    curl -fsSL https://clis.ng.bluemix.net/install/linux | sh &&\ 
    # Install the IBM Cloud Kubernetes Service CLI
    ibmcloud plugin install container-service &&\
    # Install the IBM Cloud Container Registry CLI
    ibmcloud plugin install container-registry

# FROM quay.io/eclipse/che-golang-1.14:7.30.2
COPY --from=golang:1.15.0-alpine /usr/local/go/ /usr/local/go/

ENV PATH=/usr/local/go/bin:/opt/go/:$PATH

COPY --from=buildah /usr/local/bin/buildah /usr/local/bin/buildah

ENV PATH=/usr/local/go/bin:/buildah:$PATH

USER xyz

EXPOSE 3000

CMD sleep infinity

