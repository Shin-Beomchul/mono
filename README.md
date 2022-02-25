## use
Name         | Version    |
:------      | :------    |
`Vue`        | 3.0.0      | 
`Node`       | 16.14.0    |  
`lerna`      | 4.0.0      |  
`yarn`       | 1.22.17    |  
`tsc`        | 4.5.4      |  
 
 ## Mono프로젝트 구조.
~~~
--applications
    ㄴ dml : 몰 프로젝트
    ㄴ dsv : 서비스 프로젝트

--components
    ㄴ comm-components : 공통 컴포넌트
    ㄴ comm-search : 통합검색 컴포넌트

--packages
    ㄴ mock-service : MockService 패키지
    ㄴ type-utils : 유틸 패키지(Pre Build)
~~~
## 프로젝트 실행과정
```mermaid
graph LR
A(Start) --lerna bootstrap --> B(모듈종속 호이스팅) --lerna run build--> C(모듈빌드all)
C--yarn dml:serve -->D([DML프로젝트실행])
C--yarn dsv:serve-->E([DSV프로젝트실행])
C--yarn search:serve -->F([comm-search프로젝트실행])
C--yarn xxx:serve -->G([some your Project])
```

## Mono도입 의도
 1. 모듈별 격리 : 각 모듈들은 IDE를 통해 독립 실행 & 테스트 가능
 2. 재사용 : 공통으로 사용하는 컴포넌트, 화면, 모듈화
## Repo Rules
  - applications/* 모듈간 의존하지 않아야 한다.
  - components/* 모듈간 의존하지 않아야 한다.
  - packages/* 모듈간 의존하지 않아야 한다.

  - packages/*는 다른 workspace에서도 자유롭게 참조 가능.
  - components/*는 applications workspace에서만 참조.



## plugins
- ESLint
- Vetur

## installs
- nvm use 16.14.0
- npm install --global yarn@1.22.17
- npm install -g lerna@4.0.0
- npm install @vue/cli -g (@vue/cli 4.5.15 - Optional

## Execute
- lerna bootstrap
- lerna run build
- yarn dml:serve

## workspace Script
- cd {yourPath}/mono 
- "dml:build": "yarn workspace dml build",
- "dml:serve": "yarn workspace dml serve",
- "search:build": "yarn workspace @god/comm-search build",
- "search:serve": "yarn workspace @god/comm-search serve"


## mono Repo 중 dml프로젝트 Docker 이미지 생성과정
```mermaid
graph TB
A(Docker Host: ../mono) --docker build -f Dockerfile-dml-develop --> B((Docker Build Start))
B --lerna bootstrap--> C(모듈종속 호이스팅) --lerna  run  build:packages--> ALL(packages/* Build Complete)
ALL --yarn  build:dml-->D2(applications/dml/dist/*)
D2 --nginx Copy-->E(Docker Image)
```


## docker 명령어
 - 실행중인 컨테이너 확인 : docker ps
 - 빌드된 이미지 확인 : docker images
 - 컨테이너 삭제 : docker rm {컨테이너명}
 - 이미지 삭제 : docker rmi {dockerid}
 - 도커 이미지 빌드 : docker build -f Dockerfile-dml-develop  -t mono-dml .
 - 도커 실행 : docker run --name "mono-dml" -d -p 21101:80 mono-dml


## refs
- lerna with yarn 정리 : https://awesomezero.com/development/lerna_and_yarn_workspace/
- 플러그인 : https://velog.io/@skyepodium/%EB%82%B4-%EC%B5%9C%EC%95%A0-VS-Code-%ED%99%95%EC%9E%A5-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%A8
- tsconfig 이해1 : https://velog.io/@sooran/tsconfig.json-%EC%A0%9C%EB%8C%80%EB%A1%9C-%EC%95%8C%EA%B3%A0-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
- tsconfig 옵션 설명 : https://typescript-kr.github.io/pages/tsconfig.json.html
- 순수 컴포넌트 모듈 관련 : https://github.com/pixari/component-library-monorepo
- ts Lerna : https://github.com/dz333333/vue-ts-ui
- docker: https://www.daleseo.com/docker-run/
- TypeScript모듈 컴파일 :  ex) cd {yourPath}/mono/packages/type-utils && tsc 
## CodeGen
1. wget https://petstore.swagger.io/v2/swagger.json
2. wget https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/5.0.0-beta/openapi-generator-cli-5.0.0-beta.jar -O openapi-generator-cli.jar
3. java -jar openapi-generator-cli.jar generate  -i swagger.json -o api-client -g typescript-axios 

## husky 
 https://library.gabia.com/contents/8492/


## 더 
- storybook적용
- husky Workspace Commit제한
- esLint 공통화 (Typescript, vue)
- DockerFile Build 속도 개선(lerna/yarn docker Image, 선택적 copy )
- components/* 상대경로 적용
- packages/*, components/* save To build ->완료  (2.22)
- packages/* index.ts 전환 -> 완료 (2.15)
- Git Publish 연동 Shell -> 완료 (2.23)


## 설계자 메모 이해x
- 기존 진행중이던 프로젝트 합류가 쉬워야 한다.
- include된 모듈은 완전히 격리되는지 확인 
- export된 components/* single 컴포넌트에서 여러 컴포넌트 조합하여 applications/에 추가 
- preBuild components/* <-> include Diff 확인

