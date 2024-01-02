import { WebPlugin } from '@capacitor/core';
import type { CapacitorJailbreakRootDetectionPlugin, JailbreakRootResult } from './definitions';
export declare class CapacitorJailbreakRootDetectionWeb extends WebPlugin implements CapacitorJailbreakRootDetectionPlugin {
    exitApp(): void;
    isJailbrokenOrRooted(): Promise<JailbreakRootResult>;
    isSimulator(): Promise<JailbreakRootResult>;
    isDebuggedMode(): Promise<JailbreakRootResult>;
}
