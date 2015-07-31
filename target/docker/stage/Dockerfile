FROM java:8
ADD opt /opt
WORKDIR /opt/docker
RUN ["chown", "-R", "daemon", "."]
USER daemon
ENTRYPOINT ["bin/load-tested-microservice"]
CMD []
