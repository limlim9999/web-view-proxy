import { requireNativeComponent } from 'react-native';

const WebViewProxy = requireNativeComponent('WebViewProxy');

console.log('WebViewProxy', WebViewProxy);

export { WebViewProxy };
export default WebViewProxy;