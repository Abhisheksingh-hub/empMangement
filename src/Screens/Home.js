import React, { useEffect, useState, useFocusEffect, useCallback } from 'react';
import { Dimensions, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';
import { useIsFocused } from "@react-navigation/native";

const Home = props => {
    const fromDate = useSelector((store) => store.fromDate.fromDate);
    const toDate = useSelector((store) => store.fromDate.toDate);

    const [availableDate, setAvailableDate] = useState(30)
    const [usedDate, setUsedDate] = useState(0)
    const isFocused = useIsFocused();

    const dataUpdate = () => {
        ;
        const date1 = new Date(fromDate);

        const date2 = new Date(toDate);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        console.log(diffTime + " milliseconds");
        console.log(diffDays + " days");
        if (diffDays) {
            setUsedDate(diffDays + 1)
            setAvailableDate(30 - Number(diffDays + 1))
        }
    }


    useEffect(() => {
        if (isFocused) {
            dataUpdate();
        }
    }, [props, isFocused]);


    return (

        <SafeAreaView style={styles.container}>
            <View

                style={styles.containerView}>

                <View style={styles.topView}>

                </View>

                <View style={styles.middleView}>
                    {/* <WavyHeader customStyles={styles.svgCurve} /> */}
                    <Image
                        resizeMode={'contain'}
                        source={{ uri: 'https://fakeimg.pl/60/' }}
                        style={{ position: 'absolute', top: -60, right: 135, height: 90, width: 90, borderRadius: 45 }}
                    />
                    <View style={styles.middleViewInner}>
                        <View style={styles.middleViewInnerTop}>


                            <View style={styles.middleViewInnerTopOne}>
                                <Text style={{ fontWeight: '800' }}>DOROTHY BOONE</Text>
                                <Text style={styles.valueStyle}>Php Developer</Text>
                            </View>

                            <TouchableOpacity
                                style={styles.plusIconView}
                                onPress={() =>
                                    props.navigation.navigate('NewRequest', { name: 'NewRequest', })

                                }>

                                <Ionicons name='add' size={20} color='white' />

                            </TouchableOpacity>
                        </View>
                        <View style={styles.bordeLine}></View>

                        <View style={styles.middleViewInnerBottom}>

                            <View style={styles.textView}>
                                <Text style={styles.valueHeader}>Available</Text>
                                <Text style={styles.valueStyle}>{availableDate}</Text>
                            </View>

                            <View style={styles.textView}>
                                <Text style={styles.valueHeader}>All</Text>
                                <Text style={styles.valueStyle}>30</Text>
                            </View>
                            <View style={[styles.textView, { borderRightWidth: 0 }]}>
                                <Text style={styles.valueHeader}>Used</Text>
                                <Text style={styles.valueStyle}>{usedDate}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>



                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBCE5A",

    },
    containerView: {
        marginHorizontal: 10,
        borderRadius: 10,
        flex: 1,
        marginTop: 10,
    },
    topView: {
        flex: 1,

    },
    middleView: {
        flex: 3, backgroundColor
            : 'white',
        borderRadius: 30
    },
    middleViewInner: {
        marginHorizontal: 20,
        // marginTop: 15,
        // marginBottom:20,
        marginVertical: 40,
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    valueStyle: {
        fontSize: 13,
        color: 'grey'
    },
    valueHeader: {
        fontSize: 16
    },
    textView: {
        paddingHorizontal: 10,
        flex: 1,
        borderRightWidth: 0.5,
        borderRightColor: 'grey',
        alignItems: 'center'
    },
    bordeLine: {
        // marginVertical: 10,
        marginTop: 15,
        backgroundColor: 'grey',

        height: 0.5
    },
    middleViewInnerTop: {

        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    middleViewInnerTopOne: {
        marginVertical: 20
    },
    middleViewInnerBottom: {

        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingHorizontal: 5
        , backgroundColor: 'transparent',
        marginTop: 10,
        padding: 20
    },
    bottomView: {
        marginTop: 10,
        flex: 6, backgroundColor
            : 'white'
    },
    svgCurve: {
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    plusIconView: {
        backgroundColor: 'black',
        height: 40,
        width: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    }
});