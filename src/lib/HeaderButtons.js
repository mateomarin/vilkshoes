import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
    HeaderButtons,
    HeaderButton,
} from 'react-navigation-header-buttons';

const MaterialHeaderButton = props => (
    <HeaderButton {...props} IconComponent={Icon} iconSize={20} color="#FFF" />
);

export const MaterialHeaderButtons = props => {
    return (
        <HeaderButtons
            HeaderButtonComponent={MaterialHeaderButton}
            OverflowIcon={<Icon name="more-vert" size={20} color="#FFF" />}
            {...props}
        />
    );
};

export {Item} from 'react-navigation-header-buttons';
