import React from 'react'
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native'
import tw from "tailwind-react-native-classnames";
import { Icon } from 'react-native-elements'; 
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrg } from '../slices/navSlice';

const data = [
    {
        id: "123",
        title: "Get a Ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },

    {
        id: "456",
        title: "Order Food",
        image: "https://links.papareact.com/28w",
        screen: "Food",
    },
];

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrg);

  return (
    <FlatList 
        data={data}
        horizontal
        keyExtractor= {(item) => item.id}
        renderItem= {({ item }) => (
            <TouchableOpacity 
                onPress={(() => navigation.navigate(item.screen))}
                style= {tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
                disabled= {!origin}
            >
                <View style= {tw `${!origin && "opacity-20"}`}>
                    <Image
                        style= {{ width: 120, height: 120, resizeMode: "contain" }}
                        source= {{ uri: item.image }}
                    />
                    <Text style= {tw`mt-2 text-lg font-bold`}>{item.title}</Text>
                    <Icon 
                    style= {tw`p-2 bg-black rounded-full w-10 mt-4`}
                    name= "arrowright" type= "antdesign" color= "white"/>
                </View>
            </TouchableOpacity>
        )}
    />
  );
};

export default NavOptions
