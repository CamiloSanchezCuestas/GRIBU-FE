import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Vimeo } from 'react-native-vimeo-iframe';

const videoCallbacks = {
    timeupdate: (data) => console.log('timeupdate: ', data),
    play: (data) => console.log('play: ', data),
    pause: (data) => console.log('pause: ', data),
    fullscreenchange: (data) => console.log('fullscreenchange: ', data),
    ended: (data) => console.log('ended: ', data), 
};

const VimeoPlayer = () => {
    return (
        
    <View style={styles.container}>
        <Vimeo
            videoId={'835587844'} 
            params={'api=1&autoplay=0'} 
            handlers={videoCallbacks} 
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default VimeoPlayer;