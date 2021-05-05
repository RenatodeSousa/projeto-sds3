FROM docker.io/openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} app.jar
RUN ln -sf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
#ENTRYPOINT ["java","-Djava.awt.headless=true -XX:+UseSerialGC -Xverify:none -XX:MetaspaceSize=256m -XX:MaxMetaspaceSize=512m -Xss1m -XX:MaxRAM=768m","-jar","/app.jar"]
ENTRYPOINT ["java","-Djava.awt.headless=true -XX:+UseSerialGC -Xverify:none -XX:MetaspaceSize=128m -XX:MaxMetaspaceSize=256m -Xss512k -XX:MaxRAM=512m","-jar","/app.jar"]
