"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttackTargetTypeEndpoint = void 0;
const BaseEndpoint_1 = require("../rest/BaseEndpoint");
class AttackTargetTypeEndpoint extends BaseEndpoint_1.BaseEndpoint {
    constructor(client) {
        super(client, "attacktargettype");
    }
}
exports.AttackTargetTypeEndpoint = AttackTargetTypeEndpoint;
