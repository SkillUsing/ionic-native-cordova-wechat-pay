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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3dlaWNoYXQtcGF5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFZQSxPQUFPLDhCQUEwRixNQUFNLG9CQUFvQixDQUFDOztJQWtDN0YsNkJBQWlCOzs7O0lBbUI5QyxzQ0FBa0IsYUFBQyxNQUFXOzs7Ozs7OztvQkFqRWhDO0VBOEMrQixpQkFBaUI7U0FBbkMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXG4gKlxuICogVE9ETzpcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxuICogLSBSZW1vdmUgYW55IGltcG9ydHMgdGhhdCB5b3UgYXJlIG5vdCB1c2luZ1xuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxuICpcbiAqL1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIENvcmRvdmFJbnN0YW5jZSwgSW5zdGFuY2VQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIEBuYW1lIHdlaWNoYXQtcGF5XG4gKiBAZGVzY3JpcHRpb25cbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyB3ZWljaGF0LXBheSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvd2VpY2hhdC1wYXknO1xuICpcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlaWNoYXQtcGF5OiB3ZWljaGF0LXBheSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICpcbiAqIHRoaXMud2VpY2hhdC1wYXkuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcbiAqXG4gKiBgYGBcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdXZWNoYXRQYXknLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWNoYXQtdmVpLXBheScsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICBwbHVnaW5SZWY6ICdXZWNoYXRWRUknLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gIHJlcG86ICdodHRwczovL2JpdGJ1Y2tldC5vcmcvdmVpd2ViZGV2dGVhbS9jb3Jkb3ZhLXBsdWdpbi12ZWktd2VjaGF0LXBheSNyZWFkbWUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tdmVpLXdlY2hhdC1wYXkgLS12YXJpYWJsZSB3ZWNoYXRhcHBpZD1ZT1VSX1dFQ0hBVF9BUFBJRCAtLXZhcmlhYmxlIHVuaXZlcnNhbGxpbms9WU9VUl9VTklWRVJTQUxfTElOSycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBpbnN0YWxsVmFyaWFibGVzOiBbJ3dlY2hhdGFwcGlkJywndW5pdmVyc2FsbGluayddLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2VDaGF0UGF5IGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIC8qKlxuICAgKiBTZW5kIGEgcGF5bWVudCByZXF1ZXN0XG4gICAqXG4gICAqIEBsaW5rIGh0dHBzOi8vcGF5LndlaXhpbi5xcS5jb20vd2lraS9kb2MvYXBpL2FwcC5waHA/Y2hhcHRlcj05XzFcbiAgICogQGV4YW1wbGVcbiAgICogPGNvZGU+XG4gICAqIHZhciBwYXJhbXMgPSB7XG4gICAqICAgICBhcHBpZDonYXBwaWQnXG4gICAqICAgICBtY2hfaWQ6ICcxMDAwMDEwMCcsIC8vIG1lcmNoYW50IGlkXG4gICAqICAgICBwcmVwYXlfaWQ6ICd3eDIwMTQxMTEwMTYzOTUwN2NiZjZmZmQ4YjA3Nzk5NTA4NzQnLCAvLyBwcmVwYXkgaWQgcmV0dXJuZWQgZnJvbSBzZXJ2ZXJcbiAgICogICAgIG5vbmNlOiAnMWFkZDFhMzBhYzg3YWEyZGI3MmY1N2EyMzc1ZDhmZWMnLCAvLyBub25jZSBzdHJpbmcgcmV0dXJuZWQgZnJvbSBzZXJ2ZXJcbiAgICogICAgIHRpbWVzdGFtcDogJzE0Mzk1MzEzNjQnLCAvLyB0aW1lc3RhbXBcbiAgICogICAgIHNpZ246ICcwQ0IwMTUzM0I4QzFFRjEwMzA2NTE3NEY1MEJDQTAwMScsIC8vIHNpZ25lZCBzdHJpbmdcbiAgICogfTtcbiAgICogPC9jb2RlPlxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzZW5kUGF5bWVudFJlcXVlc3QocGFyYW1zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG59XG4iXX0=