# comm-search (PreBuild Component)


## 격리 실행 & 개발.
```
yarn install
yarn serve
```

## 타 프로젝트에서 사용 방법.

### components Compile
```
yarn build:components
```
### 의존하고 있는 프로젝트 내용반영

#### 의존성 추가
```
"dependencies": {
    "@god/comm-search": "^0.1.0"
}
```

#### hoisting
```
lerna bootsrap
```

### @app/*에서 사용.
```typescript

import { SearchButton, CommSearch } from "@god/comm-search";
 
 ...

components: {
    SearchButton,
    CommSearch,
}
```


