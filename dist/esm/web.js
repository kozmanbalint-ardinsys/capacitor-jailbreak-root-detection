import { WebPlugin } from '@capacitor/core';
export class CapacitorJailbreakRootDetectionWeb extends WebPlugin {
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
//# sourceMappingURL=web.js.map