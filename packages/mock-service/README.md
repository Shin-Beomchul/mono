
# `mock-service`

> 실험적 모듈 tsc 없이 바로 사용 하고자 구조 테스트 중.. 
  이문구를 본다면 정석대로 구성된 hello-type-lib를 참고 할것.

## Usage
- Applications/someApp
```
import MockService from "@god/mock-service";
import { MockAPIMode } from "@god/mock-service/lib/NetworkTypes";


let mockService = new MockService();
mockService.getMockAxiosResponse().then((r) => console.log("use MockService", r));
console.log("oh Type ", MockAPIMode.FAST);

```
