#프로그래밍 준비
## 개발 도구 설치
- openjdk 10.0.1
- eclipse photon
- visual studio code
- git client
- scoop (pakage manager)
- scoop install gradle
- scoop install mysql
- scoop install mysql@10.0.7
- scoop install nodejs

## mysql 설정
'''
> mysql -uroot -p  
> mysql -u root -p
enter password : (처음 셋팅했을 때에는 암호가 없으므로 그냥 엔터)

- root 사용자의 암호 설정
mysql > update user set authentication_string=password('1111') where user='root';

- 암호 변경 후 권한 갱신
mysql > flush privileges

- 셋팅 종료 후 나갈 떄 
mysql > quit;

- 다시접속
mysql -uroot -p
Enter Password : 1111

- 애플리케이션에서 DB에 접속할 때 사용할 사용자를 추가한다.
create user 'study'@'localhost' identified by '1111';

- 'study' 라는 사용자가 사용할 데이터베이스 생성
create database studydb character set utf8 collate utf8_general_ci;

- studydb라는 데이터베이스의 사용권한을 study 라는 사용자에게 부여한다.
grant all privileges on studydb.* to 'study'@'localhost';

- study 사용자로 접속한다
quit 또는 exit 이 후 
mysql -u study -p (유저 정보 )
1111

- 스터디 사용자가 사용할 수 있는 데이터베이스 목록 보기
show databases;

- 사용할 데이터베이스 선택

- use 사용할 DB 명
use studydb;

- studydb에 존재하는 테이블 목록
show tables;

- studydb에 테이블 생성

bitcamp-sql/pms-ddl.sql 안에 있는 SQL 문 실행



## 웹프로젝트 폴더 준비 

예제 프로젝트 복사
'''
1) jav106 밑의 java-project를 bitcamp-cloud-computing 폴더로 복사한다.

2) 프로젝트 폴더를 이클립스 프로젝트로 만든다
- 'gradle eclipse' 를 실행하여 이클립스 설정 파일을 생성한다.
    - .project, .classpath, .settings / 등의 확장자가 있어야지만 
'''
3) gradle eclipse 입력

## Tomcat 설정

1) 톰캣 다운로드 
-tomcal.apache.org 

## 이클립스 설정

'''
워크스페이스 설정
1) 문자집합을 utf-8로 설정한다.
Window -> preferences 실행후

General > workspace > Text file encoding 부분을 UTF-8로 변경

2) 에디터 기본환경 설정

General > Editors > Text Editors 
-탭 크기를 2로 설정
- 탭 을 스페이스로 표현
- 한 줄 크기는 80자 정도
- 탭이나 공백에 대해 흐릿하게 표시

3) 자바 설정

-preferences/java/
  -installed JRE : JDK 위치 지정하기
  -Code Style / formatter : 자바 에디터 탭 정보 설정
  -자바 JDK 컴퍼일러 설정

4) 웹 환경설정
    -CSS Files : UTF-8설정
    -HTML Files : UTF-8설정
    -JSP Files : UTF-8설정

5) WAS 서버 환경 설정
톰캣 서버 설정 해줌

6) 톰캣 애플리케이션 배포하고 테스트할 톰캣 환경 설정
- Servers 뷰 
    - 테스트용 실행 서버 