import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin, setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: '123',
        icon: 'home',
        description: 'Home',
        location: 'Code Street, London, UK',
    },
    {
        id: '456',
        icon: 'briefcase',
        description: 'Work',
        location: 'The Shard, London Bridge Street, London, UK',
    },
    {
        id: '789',
        icon: 'heart',
        description: 'Bambi\'s House',
        location: '15 Sakuru Road, Sagamu, Nigeria',
    },
];

const NavFavourites = () => {     

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => (
                <View
                    style={[tw`bg-gray-200`,{height: 0.5}]}
                />
            )}
            renderItem={({item: { location, description, icon } }) => (
                <TouchableOpacity
                    style={tw`flex-row items-center p-5`}
                >
                    <Icon
                        style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text className="font-semibold text-lg">{description}</Text>
                        <Text className="text-gray-500">{location}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites