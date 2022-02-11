import axios from "axios";
import { AxiosResponse } from "axios";
import { MockAPIMode, Values } from "./NetworkTypes";

class MockService {

    public async getMockAxiosResponse(serviceMode: Values<typeof MockAPIMode> = MockAPIMode.FAST): Promise<AxiosResponse<any>> {
        switch (serviceMode) {
        case MockAPIMode.FAST:return this.fakeHttpLatencyMock();
        case MockAPIMode.WORST: return this.worstHttpLatencyMock();
        case MockAPIMode.REAL: return this.realHttpLatencyMock();
        default:
            return this.fakeHttpLatencyMock();
        }
    }

    /** No latency AxiosResponse */
    async fakeHttpLatencyMock(): Promise<AxiosResponse<any>> {
        return new Promise(function (resolve) {
            resolve({
                data: "testJson",
                status: 200,
                statusText: "OK",
                config: {},
                headers: {},
            } as AxiosResponse);
        });
    }
    /** real latency AxiosResponse */
    async realHttpLatencyMock(): Promise<AxiosResponse<any>> {
        return await axios.create({
            baseURL: "http://jsonplaceholder.typicode.com",
            headers: { "Content-Type": "application/json" }
        }).get("/posts");
    }
    /** worst latency AxiosResponse */
    async worstHttpLatencyMock(): Promise<AxiosResponse<any>> {
        return new Promise(resolve => {
            setTimeout(() => resolve({
                data: "testJson",
                status: 200,
                statusText: "OK",
                config: {},
                headers: {},
            } as AxiosResponse), 2000);
        });
    }
}
export default new MockService();