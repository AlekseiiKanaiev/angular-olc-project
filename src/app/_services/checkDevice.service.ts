export class CheckDEviceService {
    private mobList = ['iphone', 'ipod', 'mobile', 'phone', 'meego'];
    private tabList = ['ipad', 'tablet', 'touch'];

    private checkDevice(device: string): boolean {
        return window.navigator.userAgent.toLowerCase().indexOf(device) !== -1;
    }
    public checkDeviceMobile(): boolean {
        return this.mobList.some(el => this.checkDevice(el));
    }

    public checkDeviceTablet(): boolean {
        return this.tabList.some(el => this.checkDevice(el));
    }

}

