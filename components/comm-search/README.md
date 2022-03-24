# comm-search (PreBuild Component : hot Reload X )
## PreBuild Component장점 
 - CI/CD시 빌드 하지 않아도 되므로 CI/CD배포 시간 감소.
 - 사용되어지는 App에 컴파일러와 독립 : UI(vuetify, Quasar..), Frontend(React,Vue..) FrameWork 독립을 의미함.

## @app/\*에서 사용.
```typescript
import { SearchButton, CommSearch } from "@god/comm-search";
 ...
components: {
    SearchButton,
    CommSearch,
}
```

## 격리 실행 & 개발.
```
yarn install
yarn serve
```

## 패키지 배포
 - 개발한 결과물을 빌드하여 배포.(업데이트)
```
yarn build:components
```


## TODO
 - storyBook적용.
 


