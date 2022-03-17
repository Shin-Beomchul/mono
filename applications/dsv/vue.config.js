module.exports = {
  css: {
    extract: false,
    sourceMap: process.env.NODE_ENV !== "production",
  },
  //  개발환경에서는 정상 수행되나 운영환경에서는 실행되지 않음
  //  CORS를 정확히 해결하려면 결국 서버에서 처리 필요
  devServer: {
    disableHostCheck: true, // 호스트 도메인 변경 시
    //     proxy: {
    //         //  await axios.get("endpoint/users/1")
    //         "endpoint": {
    //             target: "http://god.co.kr/"
    //         },
    //         //  await axios.get("media/videos/1")
    //         "media": {
    //             target: "http://god.co.kr/"
    //         }
    //     }
  },
};
