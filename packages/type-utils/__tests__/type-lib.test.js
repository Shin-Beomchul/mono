"use strict";

import { sayHello } from "@god/hello-type-lib";
import { HelloTypeClass } from "@god/hello-type-lib";
describe("network", () => {
    sayHello();
    let instance = new HelloTypeClass();
    instance.getName();
    it("needs tests");
});
