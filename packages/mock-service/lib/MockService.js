import axios from "axios";
import { MockAPIMode } from "./NetworkTypes";
class MockService {
    async getMockAxiosResponse(serviceMode = MockAPIMode.FAST) {
        switch (serviceMode) {
            case MockAPIMode.FAST: return this.fakeHttpLatencyMock();
            case MockAPIMode.WORST: return this.worstHttpLatencyMock();
            case MockAPIMode.REAL: return this.realHttpLatencyMock();
            default:
                return this.fakeHttpLatencyMock();
        }
    }
    /** No latency AxiosResponse */
    async fakeHttpLatencyMock() {
        return new Promise(function (resolve) {
            resolve({
                data: "testJson",
                status: 200,
                statusText: "OK",
                config: {},
                headers: {},
            });
        });
    }
    /** real latency AxiosResponse */
    async realHttpLatencyMock() {
        return await axios.create({
            baseURL: "http://jsonplaceholder.typicode.com",
            headers: { "Content-Type": "application/json" }
        }).get("/posts");
    }
    /** worst latency AxiosResponse */
    async worstHttpLatencyMock() {
        return new Promise(resolve => {
            setTimeout(() => resolve({
                data: "testJson",
                status: 200,
                statusText: "OK",
                config: {},
                headers: {},
            }), 2000);
        });
    }
}
export default MockService;
//# sourceMappingURL=MockService.js.map