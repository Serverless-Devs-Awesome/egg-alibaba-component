"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var Framework = require("@serverless-devs/s-framework");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var format = require("string-format");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var fse = require("fs-extra");
var bootstrap_1 = require("./bootstrap");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
var EggComponent = /** @class */ (function (_super) {
    __extends(EggComponent, _super);
    function EggComponent(id) {
        return _super.call(this, id) || this;
    }
    EggComponent.prototype.deploy = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, Detail, frameworkInputs, formatStr, bootstrapPath, _b;
            var _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!inputs.Properties.Detail) {
                            inputs.Properties.Detail = {};
                        }
                        _a = inputs.Properties.Detail, Detail = _a === void 0 ? {} : _a;
                        frameworkInputs = inputs;
                        frameworkInputs.Properties.Detail = {
                            Function: inputs.Properties.Detail ? inputs.Properties.Detail.Function || {} : {},
                            Service: inputs.Properties.Detail ? inputs.Properties.Detail.Service || {} : {}
                        };
                        formatStr = {
                            port: Detail.Bootstrap ? Detail.Bootstrap.Port || bootstrap_1.DEFAULTPORT : bootstrap_1.DEFAULTPORT,
                            start: Detail.Bootstrap ? Detail.Bootstrap.Start || bootstrap_1.DEFAULTSTART : bootstrap_1.DEFAULTSTART
                        };
                        bootstrapPath = Detail.Bootstrap ? Detail.Bootstrap.Path : undefined;
                        if (!bootstrapPath) return [3 /*break*/, 2];
                        _b = frameworkInputs;
                        _c = {};
                        return [4 /*yield*/, fse.readFileSync(bootstrapPath, 'utf-8')];
                    case 1:
                        _b.Bootstrap = (_c.Content = _d.sent(),
                            _c.IsConfig = Detail.Bootstrap ? true : false,
                            _c);
                        return [3 /*break*/, 3];
                    case 2:
                        frameworkInputs.Bootstrap = {
                            Content: format(bootstrap_1.DEFAULTBOOTSTRAP, formatStr),
                            IsConfig: Detail.Bootstrap ? true : false
                        };
                        _d.label = 3;
                    case 3: return [4 /*yield*/, _super.prototype.deploy.call(this, frameworkInputs)];
                    case 4: return [2 /*return*/, _d.sent()];
                }
            });
        });
    };
    EggComponent.prototype.remove = function (inputs) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _super.prototype.remove.call(this, inputs)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return EggComponent;
}(Framework));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
module.exports = EggComponent;
//# sourceMappingURL=index.js.map