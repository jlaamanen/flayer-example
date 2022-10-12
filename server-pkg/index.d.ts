/// <reference path="./products/index.d.ts" />
/// <reference path="./user/index.d.ts" />
declare module "server-pkg" {
    export { configure, disconnect } from "flayer/client-lib";
}
