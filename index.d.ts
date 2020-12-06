import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name We Chat Pay
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { WeChatPay } from '@ionic-native/we-chat-pay';
 *
 *
 * constructor(private weChatPay: WeChatPay) { }
 *
 * ...
 *
 *
 * this.weChatPay.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class WeChatPayOriginal extends IonicNativePlugin {
    sendPaymentRequest(arg0: any): Promise<any>;
    auth(scope: any, state: any): Promise<any>;
}

export declare const WeChatPay: WeChatPayOriginal;