import React from 'react'
import { Text } from 'react-native'
import { View } from 'react-native'
import tw from 'twrnc'
import { categoryBG, colors } from '../themes'

export default function ExpenseCard({item}) {
  return (
    <View style={{backgroundColor: categoryBG[item.category]}} className="flex-row justify-between items-center p-3 px-5 mb-3 rounded-2xl">
      <View>
        <Text style={tw`${colors.heading} font-bold`}>{item.title}</Text>
        <Text style={tw`${colors.heading} text-xs`}>{item.category}</Text>
      </View>

      <View>
        <Text>${item.amount}</Text>
      </View>
    </View>
  )
}
