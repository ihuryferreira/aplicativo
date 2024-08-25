import React from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View
      style={{ flex: 1, marginTop: 28 }}
    >
      <StatusBar style="light" backgroundColor="#b31919" />
      <WebView
        source={{
          uri: 'https://docs.google.com/forms/d/e/1FAIpQLScxGPXSpW-h-_sSeIfMNJuU_3LjnYVH_4FjqBvDI2fr5tTMSw/viewform?embedded=true&pli=1',
        }}
      />
    </View>
  );
}
