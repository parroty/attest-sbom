"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSBOMPredicate = exports.generateProvenancePredicate = exports.attestProvenance = exports.attest = void 0;
var attest_1 = require("./attest");
Object.defineProperty(exports, "attest", { enumerable: true, get: function () { return attest_1.attest; } });
Object.defineProperty(exports, "attestProvenance", { enumerable: true, get: function () { return attest_1.attestProvenance; } });
var provenance_1 = require("./provenance");
Object.defineProperty(exports, "generateProvenancePredicate", { enumerable: true, get: function () { return provenance_1.generateProvenancePredicate; } });
var sbom_1 = require("./sbom");
Object.defineProperty(exports, "generateSBOMPredicate", { enumerable: true, get: function () { return sbom_1.generateSBOMPredicate; } });
