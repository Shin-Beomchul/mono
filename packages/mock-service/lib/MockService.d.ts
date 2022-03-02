import { AxiosResponse } from "axios";
import { MockAPIMode, Values } from "./NetworkTypes";
declare class MockService {
    getMockAxiosResponse(serviceMode?: Values<typeof MockAPIMode>): Promise<AxiosResponse<any>>;
    /** No latency AxiosResponse */
    fakeHttpLatencyMock(): Promise<AxiosResponse<any>>;
    /** real latency AxiosResponse */
    realHttpLatencyMock(): Promise<AxiosResponse<any>>;
    /** worst latency AxiosResponse */
    worstHttpLatencyMock(): Promise<AxiosResponse<any>>;
}
export default MockService;
