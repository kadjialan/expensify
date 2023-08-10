import React from 'react'
import { Platform, StatusBar, View } from 'react-native'

export default function ScreenWrapper({children}) {
    let statusBarHeight= StatusBar.currentHeight? StatusBar.currentHeight: Platform.OS== 'ios' ? 30 : 5
  return (
    <View style={{paddingTop: statusBarHeight}}>
      {
        children
      }
      </View>
  )
}
