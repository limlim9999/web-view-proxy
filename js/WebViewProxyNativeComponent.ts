import type {ViewProps} from 'ViewPropTypes';
import type {HostComponent} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

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
  // add other props here
}

export default codegenNativeComponent<NativeProps>(
	'WebViewProxy',
) as HostComponent<NativeProps>;

