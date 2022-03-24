# comm-components (Include Component Hot Reload)
- 편의를 위해 Include 방식을 사용하나 PreBuild(comm-search)가 가장 이상적.
- 사용 되어지는 App의 컴파일러에 의존 : App의 FrameWork에 종속.


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
