var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var WeChatPayOriginal = /** @class */ (function (_super) {
    __extends(WeChatPayOriginal, _super);
    function WeChatPayOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeChatPayOriginal.prototype.sendPaymentRequest = function (arg0) { return cordova(this, "sendPaymentRequest", {}, arguments); };
    WeChatPayOriginal.prototype.auth = function (scope, state) { return cordova(this, "auth", {}, arguments); };
    WeChatPayOriginal.pluginName = "WeChatPay";
    WeChatPayOriginal.plugin = "cordova-plugin-vei-wechat-pay";
    WeChatPayOriginal.pluginRef = "WechatVEI";
    WeChatPayOriginal.repo = "https://bitbucket.org/veiwebdevteam/cordova-plugin-vei-wechat-pay";
    WeChatPayOriginal.install = "cordova plugin add cordova-plugin-vei-wechat-pay --variable wechatappid=YOUR_WECHAT_APPID --variable universallink=YOUR_UNIVERSAL_LINK";
    WeChatPayOriginal.installVariables = ["wechatappid", "universallink"];
    WeChatPayOriginal.platforms = ["Android", "iOS"];
    return WeChatPayOriginal;
}(IonicNativePlugin));
var WeChatPay = new WeChatPayOriginal();
export { WeChatPay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlLWNoYXQtcGF5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDN0YsNkJBQWlCOzs7O0lBSTlDLHNDQUFrQixhQUFDLElBQVM7SUFHNUIsd0JBQUksYUFBQyxLQUFVLEVBQUUsS0FBVTs7Ozs7Ozs7b0JBckQ3QjtFQThDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xuICpcbiAqIFRPRE86XG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcbiAqIC0gRG9jdW1lbnQgdXNhZ2UgKGltcG9ydGluZywgZXhlY3V0aW5nIG1haW4gZnVuY3Rpb25hbGl0eSlcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXG4gKiAtIFJlbW92ZSB0aGlzIG5vdGVcbiAqXG4gKi9cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBAbmFtZSBXZSBDaGF0IFBheVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgV2VDaGF0UGF5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZS1jaGF0LXBheSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VDaGF0UGF5OiBXZUNoYXRQYXkpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiB0aGlzLndlQ2hhdFBheS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlQ2hhdFBheScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXZlaS13ZWNoYXQtcGF5JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ1dlY2hhdFZFSScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy92ZWl3ZWJkZXZ0ZWFtL2NvcmRvdmEtcGx1Z2luLXZlaS13ZWNoYXQtcGF5JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxuICBpbnN0YWxsOiAnY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXZlaS13ZWNoYXQtcGF5IC0tdmFyaWFibGUgd2VjaGF0YXBwaWQ9WU9VUl9XRUNIQVRfQVBQSUQgLS12YXJpYWJsZSB1bml2ZXJzYWxsaW5rPVlPVVJfVU5JVkVSU0FMX0xJTksnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcbiAgaW5zdGFsbFZhcmlhYmxlczogW1wid2VjaGF0YXBwaWRcIiwgXCJ1bml2ZXJzYWxsaW5rXCJdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2VDaGF0UGF5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG5cbiAgQENvcmRvdmEoKVxuICBzZW5kUGF5bWVudFJlcXVlc3QoYXJnMDogYW55KTogUHJvbWlzZTxhbnk+IHtyZXR1cm47fVxuXG4gIEBDb3Jkb3ZhKClcbiAgYXV0aChzY29wZTogYW55LCBzdGF0ZTogYW55KTogUHJvbWlzZTxhbnk+IHsgcmV0dXJuOyB9XG5cbn1cbiJdfQ==