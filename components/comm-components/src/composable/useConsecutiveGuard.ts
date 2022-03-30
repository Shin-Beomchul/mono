/**
  @author  Shin-BeomChul
  @description 이전 호출 이후 delay가 만료 되면 @func 가 즉시 호출, delay만료 전에 중복 호출 시 무시.
  @example 버튼 연타 방지

   <=== Template ===>
   <button @click="consecutiveGuard($event, 'apiKey')"> consecutiveGuard </button>

   setUp(){
      const consecutiveGuard = useConsecutiveGuard(1000, apiFunction, (state) => {
      console.log(state);
     });

     return {
         consecutiveGuard
     }
   }
 */
const useConsecutiveGuard = (delay = 500, func, callback?) => {
  let isDelaying = false;
  const consecutiveGuard = (...args) => {
    const callNow = (resolve) => {
      resolve(func(...args));
    };
    // delay시간 이내인지 확인
    if (isDelaying) {
      // 이내
      if (callback) callback("delaying");
    } else {
      // 초과 : 호출
      return new Promise((resolve) => {
        isDelaying = true;
        if (callback) callback("delaying");
        callNow(resolve);
        setTimeout(() => {
          isDelaying = false;
          if (callback) callback("done");
        }, delay);
      });
    }
  };

  return consecutiveGuard;
};

export { useConsecutiveGuard };
