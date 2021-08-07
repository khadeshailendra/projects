FROM tomcat:8.0-alpine

MAINTAINER  khadeshailendra@gmail.com

RUN rm -rf /usr/local/tomcat/ROOT

ADD sample.war /usr/local/tomcat/webapps/

CMD ["catalina.sh", "run"]
