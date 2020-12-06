import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name weichat-pay
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { weichat-pay } from '@ionic-native/weichat-pay';
 *
 *
 * constructor(private weichat-pay: weichat-pay) { }
 *
 * ...
 *
 *
 * this.weichat-pay.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class WeChatPayOriginal extends IonicNativePlugin {
    /**
     * Send a payment request
     *
     * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
     * @example
     * <code>
     * var params = {
     *     appid:'appid'
     *     mch_id: '10000100', // merchant id
     *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
     *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
     *     timestamp: '1439531364', // timestamp
     *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
     * };
     * </code>
     */
    sendPaymentRequest(params: any): Promise<any>;
}

export declare const WeChatPay: WeChatPayOriginal;