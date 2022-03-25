# comm-components (Include Component Hot Reload)
- 편의를 위해 Include 방식을 사용하나 PreBuild(comm-search)가 가장 이상적.(검토 후 모두 PreBuild로 전환 예정)
- 사용 되어지는 App의 컴파일러에 의존 : App의 FrameWork에 종속.
- 상대경로로 개발필요. (exposes되어 부모 프로젝트에서 사용되는 컴포넌트는 절대경로 미지원) 


@App/\*

```typescript
import { CommGnb, CommFooter, JwtToken } from "@god/comm-components";

 ...

components: {
    CommGnb,
    CommFooter,
}

...

data() {
    return {
        jwtToken: {} as JwtToken // type
    };
}

```

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
