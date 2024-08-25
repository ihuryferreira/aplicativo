import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview'

export function Header() {
  const runFirst = `document.body.style.backgroundColor = 'red'; true`;
  return (
    <ScrollView
      style={{ flex: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1 }}>
        <WebView
          source={{
            uri: 'https://docs.google.com/forms/d/e/1FAIpQLScxGPXSpW-h-_sSeIfMNJuU_3LjnYVH_4FjqBvDI2fr5tTMSw/viewform?embedded=true&pli=1',
          }}
          onMessage={(event) => { }}
          injectedJavaScript={runFirst}
        />
      </View>
    </ScrollView>
  );
}


