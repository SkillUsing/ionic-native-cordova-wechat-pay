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
    WeChatPayOriginal.prototype.sendPaymentRequest = function (params) { return cordova(this, "sendPaymentRequest", {}, arguments); };
    WeChatPayOriginal.prototype.auth = function (scope, state) { return cordova(this, "auth", {}, arguments); };
    WeChatPayOriginal.pluginName = "WechatPay";
    WeChatPayOriginal.plugin = "cordova-plugin-wechat-vei-pay";
    WeChatPayOriginal.pluginRef = "WechatVEI";
    WeChatPayOriginal.repo = "https://bitbucket.org/veiwebdevteam/cordova-plugin-vei-wechat-pay#readme";
    WeChatPayOriginal.install = "ionic cordova plugin add cordova-plugin-vei-wechat-pay --variable wechatappid=YOUR_WECHAT_APPID --variable universallink=YOUR_UNIVERSAL_LINK";
    WeChatPayOriginal.installVariables = ["wechatappid", "universallink"];
    WeChatPayOriginal.platforms = ["Android", "iOS"];
    return WeChatPayOriginal;
}(IonicNativePlugin));
var WeChatPay = new WeChatPayOriginal();
export { WeChatPay };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlaWNoYXQtcGF5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDN0YsNkJBQWlCOzs7O0lBbUI5QyxzQ0FBa0IsYUFBQyxNQUFXO0lBSzlCLHdCQUFJLGFBQUMsS0FBVSxFQUFFLEtBQVU7Ozs7Ozs7O29CQXRFN0I7RUE4QytCLGlCQUFpQjtTQUFuQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIGlzIGEgdGVtcGxhdGUgZm9yIG5ldyBwbHVnaW4gd3JhcHBlcnNcbiAqXG4gKiBUT0RPOlxuICogLSBBZGQvQ2hhbmdlIGluZm9ybWF0aW9uIGJlbG93XG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXG4gKiAtIFJlbW92ZSBhbGwgdGhlIGNvbW1lbnRzIGluY2x1ZGVkIGluIHRoaXMgdGVtcGxhdGUsIEVYQ0VQVCB0aGUgQFBsdWdpbiB3cmFwcGVyIGRvY3MgYW5kIGFueSBvdGhlciBkb2NzIHlvdSBhZGRlZFxuICogLSBSZW1vdmUgdGhpcyBub3RlXG4gKlxuICovXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBJb25pY05hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbi8qKlxuICogQG5hbWUgd2VpY2hhdC1wYXlcbiAqIEBkZXNjcmlwdGlvblxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IHdlaWNoYXQtcGF5IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS93ZWljaGF0LXBheSc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2VpY2hhdC1wYXk6IHdlaWNoYXQtcGF5KSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKlxuICogdGhpcy53ZWljaGF0LXBheS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ1dlY2hhdFBheScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlY2hhdC12ZWktcGF5JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gIHBsdWdpblJlZjogJ1dlY2hhdFZFSScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy92ZWl3ZWJkZXZ0ZWFtL2NvcmRvdmEtcGx1Z2luLXZlaS13ZWNoYXQtcGF5I3JlYWRtZScsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi12ZWktd2VjaGF0LXBheSAtLXZhcmlhYmxlIHdlY2hhdGFwcGlkPVlPVVJfV0VDSEFUX0FQUElEIC0tdmFyaWFibGUgdW5pdmVyc2FsbGluaz1ZT1VSX1VOSVZFUlNBTF9MSU5LJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnd2VjaGF0YXBwaWQnLCd1bml2ZXJzYWxsaW5rJ10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBXZUNoYXRQYXkgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBwYXltZW50IHJlcXVlc3RcbiAgICpcbiAgICogQGxpbmsgaHR0cHM6Ly9wYXkud2VpeGluLnFxLmNvbS93aWtpL2RvYy9hcGkvYXBwLnBocD9jaGFwdGVyPTlfMVxuICAgKiBAZXhhbXBsZVxuICAgKiA8Y29kZT5cbiAgICogdmFyIHBhcmFtcyA9IHtcbiAgICogICAgIGFwcGlkOidhcHBpZCdcbiAgICogICAgIG1jaF9pZDogJzEwMDAwMTAwJywgLy8gbWVyY2hhbnQgaWRcbiAgICogICAgIHByZXBheV9pZDogJ3d4MjAxNDExMTAxNjM5NTA3Y2JmNmZmZDhiMDc3OTk1MDg3NCcsIC8vIHByZXBheSBpZCByZXR1cm5lZCBmcm9tIHNlcnZlclxuICAgKiAgICAgbm9uY2U6ICcxYWRkMWEzMGFjODdhYTJkYjcyZjU3YTIzNzVkOGZlYycsIC8vIG5vbmNlIHN0cmluZyByZXR1cm5lZCBmcm9tIHNlcnZlclxuICAgKiAgICAgdGltZXN0YW1wOiAnMTQzOTUzMTM2NCcsIC8vIHRpbWVzdGFtcFxuICAgKiAgICAgc2lnbjogJzBDQjAxNTMzQjhDMUVGMTAzMDY1MTc0RjUwQkNBMDAxJywgLy8gc2lnbmVkIHN0cmluZ1xuICAgKiB9O1xuICAgKiA8L2NvZGU+XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNlbmRQYXltZW50UmVxdWVzdChwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoKVxuICBhdXRoKHNjb3BlOiBhbnksIHN0YXRlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19