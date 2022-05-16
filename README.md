# TCCFun
It's a gamified flow on a WEB System to support IT students on the term paper course on UFBA. It includes the use of the React, Spring Boot, Hibernate and MySQL technologies

It was developed following the tutorial that you can visit the article on medium: [How to build and deploy React app with Spring Boot and MySQL server](https://medium.com/@mukundmadhav/build-and-deploy-react-app-with-spring-boot-and-mysql-6f888eb0c600) and using https://github.com/mukundmadhav/react-springboot-mysql from it as framework. See more about Mukund Madhav in https://mukundmadhav.com/

## Installation
Requisite:       
  -Maven       
  -npm       
  -JAVA

```sh
$ mvn clean
$ mvn package
$ java -jar target/tccflow-1.0.0-SNAPSHOT.jar
```
The backend and the frontend are compiled into a single executable `.jar` file.
PS: If it's required another `.jar`, you will have to delete the file on `target/tccflow-1.0.0-SNAPSHOT.jar` to create other one using the same name.

####  App running
Local:            http://localhost:8080/       
  On Your Network:  http://127.0.0.1:8080/    

## Settings example for applications.properties:
```sh
spring.mvc.view.prefix=/WEB-INF/views/
spring.mvc.view.suffix=.jsp
spring.datasource.url = jdbc:mysql://localhost:3306/testdb?verifyServerCertificate=false&useSSL=false&requireSSL=false&useJDBCCompliantTimezoneShift=true&serverTimezone=UTC
spring.datasource.username = root
spring.datasource.password = 
spring.jpa.show-sql = true 
spring.jpa.generate-ddl=true
spring.jpa.hibernate.ddl-auto = update
spring.jpa.hibernate.naming.implicit-strategy = org.hibernate.cfg.ImprovedNamingStrategy
spring.jpa.properties.hibernate.dialect = org.hibernate.dialect.MySQL5InnoDBDialect
```

#### TODO
Remove &allowPublicKeyRetrieval=true and add an auth       
  See: https://dev.mysql.com/doc/refman/8.0/en/windows-pluggable-authentication.html       
  Error: https://stackoverflow.com/questions/57416600/connection-spring-boot-mysql-public-key-retrieval-is-not-allowed

Add Login Authentication on SpringBoot
 See https://www.codejava.net/frameworks/spring-boot/user-registration-and-login-tutorial
 See https://spring.io/guides/gs/securing-web/
 See https://www.baeldung.com/registration-with-spring-mvc-and-spring-security
 See https://dzone.com/articles/add-login-to-your-spring-boot-app-in-10-mins
 See https://developer.okta.com/
 See https://www.javaguides.net/2018/10/user-registration-module-using-springboot-springmvc-springsecurity-hibernate5-thymeleaf-mysql.html
 See https://o7planning.org/11543/create-a-login-application-with-spring-boot-spring-security-spring-jdbc
 See https://o7planning.org/11655/create-a-user-registration-application-with-spring-boot-spring-form-validation
 See https://www.youtube.com/watch?v=aRLoSDOlU3w

Add Login Authentication on React
 See https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
 See https://www.baeldung.com/spring-security-login-react
 See https://www.bezkoder.com/react-hooks-redux-login-registration-example/
 See https://www.bezkoder.com/react-login-example-jwt-hooks/
 See https://jasonwatmore.com/post/2020/03/02/react-hooks-redux-user-registration-and-login-tutorial-example
 See https://www.youtube.com/watch?v=sPjuGNWWlAk
 See https://www.youtube.com/watch?v=X3qyxo_UTR4
 See https://www.youtube.com/watch?v=juUaJpMd2LE
 See https://stormpath.com/blog/spring-boot-stormpath-react-sdk

Create the logging  
  Log4J is an extremely popular open-sources library used in Java to manage application logging. It is an extremely popular library among Java developers because of how simple it makes logging in Java. 
  See https://mukundmadhav.com/log4j-vulnerability-fix/#more-199
  See https://www.baeldung.com/spring-boot-logging
  See https://docs.spring.io/spring-boot/docs/1.2.x-SNAPSHOT/reference/html/howto-logging.html
  See https://www.tutorialspoint.com/spring/logging_with_log4j.htm
  See https://www.youtube.com/watch?v=ojnk2inXNYY
  See https://www.youtube.com/watch?v=S9USRSEyWU0
  See https://www.youtube.com/watch?v=6q5LldTL-zM

## Tools
[vscode](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user)       
  [vscode-spring-boot](https://github.com/spring-projects/sts4/tree/main/vscode-extensions/vscode-spring-boot#usage)       
  [postman](https://www.postman.com/downloads/)
  [extensão do chrome: React Redux](https://github.com/reduxjs/redux-devtools)

#### MySQL
Please Try the following steps:
```sh
c:\mysql\bin>mysqld --install
c:\mysql\bin>mysqld --initialize
```
Then press `Windows key + R` write `services.msc`, run as admin.       
  Find out MySQL right click and select start to start MySQL service.

#### Hibernate
https://stackoverflow.com/questions/9108224/can-someone-explain-mappedby-in-jpa-and-hibernate
  TODO
  https://www.infoworld.com/article/3373652/java-persistence-with-jpa-and-hibernate-part-1-entities-and-relationships.html

## Reference Documentation
For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/docs/2.2.4.RELEASE/maven-plugin/)
* [Spring Data JPA](https://docs.spring.io/spring-boot/docs/2.2.4.RELEASE/reference/htmlsingle/#boot-features-jpa-and-spring-data)
* [Spring Web](https://docs.spring.io/spring-boot/docs/2.2.4.RELEASE/reference/htmlsingle/#boot-features-developing-web-applications)
* [Spring Boot DevTools](https://docs.spring.io/spring-boot/docs/2.2.4.RELEASE/reference/htmlsingle/#using-boot-devtools)

#### Guides
The following guides illustrate how to use some features concretely:

* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/bookmarks/)
* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)
* [MySQL](https://www.devmedia.com.br/guia/tecnologia-mysql/34335)

## License
Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.