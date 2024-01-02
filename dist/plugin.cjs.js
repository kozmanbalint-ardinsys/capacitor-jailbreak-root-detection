'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@capacitor/core');

const CapacitorJailbreakRootDetection = core.registerPlugin('CapacitorJailbreakRootDetection', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.CapacitorJailbreakRootDetectionWeb()),
});

class CapacitorJailbreakRootDetectionWeb extends core.WebPlugin {
    exitApp() {
        // Do Nothing
    }
    async isJailbrokenOrRooted() {
        return {
            result: false,
        };
    }
    async isSimulator() {
        return {
            result: false,
        };
    }
    async isDebuggedMode() {
        return {
            result: false,
        };
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    CapacitorJailbreakRootDetectionWeb: CapacitorJailbreakRootDetectionWeb
});

exports.CapacitorJailbreakRootDetection = CapacitorJailbreakRootDetection;
//# sourceMappingURL=plugin.cjs.js.map
