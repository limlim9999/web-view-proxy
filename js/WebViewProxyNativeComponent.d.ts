import type { HostComponent, ViewProps } from 'react-native';
export interface NativeProps extends ViewProps {
    javaScriptEnabled?: boolean;
    thirdPartyCookiesEnabled?: boolean;
    scalesPageToFit?: boolean;
    domStorageEnabled?: boolean;
    userAgent?: string;
    mediaPlaybackRequiresUserAction?: boolean;
    allowUniversalAccessFromFileURLs?: boolean;
    saveFormDataDisabled?: boolean;
    injectedJavaScript?: string;
    messagingEnabled?: boolean;
    source?: {
        html?: string;
        baseUrl?: string;
        uri?: string;
        method?: string;
        body?: string;
        headers: string[];
    };
    onContentSizeChange?: boolean;
    mixedContentMode?: string;
}
declare const _default: HostComponent<NativeProps>;
export default _default;
//# sourceMappingURL=WebViewProxyNativeComponent.d.ts.map