// FROM ubuntu:18.04


// RUN apt-get update && \
//       apt-get -y install sudo

// RUN useradd -m docker && echo "docker:docker" | chpasswd && adduser docker sudo

// RUN apt-get -y install curl gnupg
// RUN curl -sL https://deb.nodesource.com/setup_8.x  | bash -
// RUN apt-get -y install nodejs
// RUN curl -fsSL https://clis.cloud.ibm.com/install/linux | sh  && chmod -R 777 /.blumix 
// RUN mkdir /.blumix




// USER docker


// WORKDIR /projects

// LABEL che:server:8003:ref=angular che:server:8003:protocol=http che:server:3000:ref=node-3000 che:server:3000:protocol=http che:server:9000:ref=node-9000 che:server:9000:protocol=http

// EXPOSE 1337 3000 4200 5000 9000 8003

// CMD sleep infinity