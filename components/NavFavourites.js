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
                    style={[{height: 0.5,backgroundColor:"#8D413C"}]}
                />
            )}
            renderItem={({item: { location, description, icon } }) => (
                <TouchableOpacity
                    style={[tw`flex-row items-center p-5`]}
                >
                    <Icon
                        style={tw`mr-4 rounded-full p-3`}
                        name={icon}
                        type="ionicon"
                        color="#B3AC7A"
                        size={18}
                    />
                    <View>
                        <Text style={[tw`font-semibold text-lg`,{
                            color:'#B3AC7A'
                        }]}>{description}</Text>
                        <Text style={[tw`text-gray-500`,{
                            color:'#B3AC7A'
                        }]}>{location}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavFavourites