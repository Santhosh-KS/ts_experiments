FROM swift:5.9 
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

WORKDIR /code

RUN apt update 
RUN apt install -y build-essential \
vim \
neovim  \
curl 
RUN curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh > install.sh 
RUN chmod a+x install.sh
RUN bash install.sh
RUN source /root/.bashrc
