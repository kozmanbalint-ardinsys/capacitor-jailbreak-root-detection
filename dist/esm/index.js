import { registerPlugin } from '@capacitor/core';
const CapacitorJailbreakRootDetection = registerPlugin('CapacitorJailbreakRootDetection', {
    web: () => import('./web').then(m => new m.CapacitorJailbreakRootDetectionWeb()),
});
export * from './definitions';
export { CapacitorJailbreakRootDetection };
//# sourceMappingURL=index.js.map