import React, { useState } from 'react';
import { Dimensions, Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/AntDesign';
import { images } from '../Assets/Images/ImagesUrl';
import {useDispatch, useSelector} from 'react-redux';
import { messages } from '../Constants/messages';

const NewRequest = props => {
    const [isUnpaid ,setUpaidSelecte] = useState(false)
    const fromDate = useSelector((store) => store.fromDate.fromDate);
    const toDate = useSelector((store) => store.fromDate.toDate);
  
    useEffect(() => {

    }, []);
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
                    <View style={styles.middleViewInnerOne}>


                        <View>
                            <Text style={{ fontWeight: '800' }}>New Request </Text>
                        </View>




                    </View>

                    <View style={styles.middleViewInnerTwo}>
                        <View style={styles.middleViewInnerTwoButton}>

                            <TouchableOpacity
                                style={[styles.itemSlelect, { marginLeft: 10 }]}
                            >
                                <Image style={styles.imagePiggyBank}
                                    source={images.piggyBank} />
                                <Text style={styles.valueStyle}>Annual</Text>

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.itemSlelect, { marginRight: 10 }]}
                            >
                                <Image style={styles.imagePiggyBank}
                                    source={images.piggyBank} />
                                <Text style={styles.valueStyle}>Parental</Text>


                            </TouchableOpacity>

                        </View>
                        <View style={styles.middleViewInnerTwoButton}>

                            <TouchableOpacity
                                style={[styles.itemSlelect, { marginLeft: 10 ,backgroundColor:isUnpaid?'black':'#D3D3D3'}]}
                                onPress={() =>
                                    setUpaidSelecte(!isUnpaid)
                                }
                            >
                                <Image style={styles.imagePiggyBank}
                                    source={images.piggyBank} />
                                <Text style={styles.valueStyle}>Unpaid</Text>
 

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.itemSlelect, { marginRight: 10 }]}
                                >
                                <Image style={styles.imagePiggyBank}
                                    source={images.piggyBank} />
                                <Text style={styles.valueStyle}>Special</Text>


                            </TouchableOpacity>
                        </View>
                    </View>


                    <View style={styles.middleViewInnerThree}>
                        <View style={styles.textInputView}>
                            <TouchableOpacity
                                style={styles.textInputViewBtn}
                                onPress={() =>   
                            props.navigation.navigate('DateSelection', { dateType: 'fromDate', })


                                }>

                                <Text style={styles.textInputValiue}>
                                    From
                                </Text>
                            
                            <Text style={styles.textInputValiueIn}>
                                    {fromDate==0?null:fromDate}
                                </Text>
                                </TouchableOpacity>
                            <View style={styles.bordeLine}></View>

                            <TouchableOpacity
                                style={styles.textInputViewBtn}
                                onPress={() =>
                                    props.navigation.navigate('DateSelection', { dateType: 'toDate', })

                                }>

                                <Text style={styles.textInputValiue}>
                                    To
                                </Text>
                            
                            <Text style={styles.textInputValiueIn}>
                                    {toDate==0?null:toDate}
                                </Text>
                                </TouchableOpacity>
                            <View style={styles.bordeLine}></View>

                        </View>
                        <View style={styles.submitButtonView}>


                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() =>
                                  isUnpaid?  props.navigation.navigate('Home', { name: 'Home', }):alert(messages.REQUEST_SELECTION)

                                }>

                                <Text style={styles.submitFont}>
                                    Confirm
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>



            </View>
        </SafeAreaView>
    );
};

export default NewRequest;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FBCE5A",

    },
    imagePiggyBank: { height: 30, width: 30, backgroundColor: 'white', borderRadius: 10, },
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
        flex: 9, backgroundColor
            : 'white',
        borderRadius: 30,

    },
    middleViewInnerOne: {
        marginHorizontal: 20,
        backgroundColor: 'transparent',
        flex: 1,
        justifyContent: 'space-evenly'
    },
    middleViewInnerTwo: {

        backgroundColor: 'transparent',
        flex: 3,
        justifyContent: 'center',

    },
    middleViewInnerTwoButton: {

        flexDirection: 'row',
         
    },
    middleViewInnerThree: {


        backgroundColor: 'transparent',
        flex: 5,
        justifyContent: 'space-evenly'

    },
    valueStyle: {
        marginTop:5,
        fontSize: 13,
        color: 'white'
    },
    valueHeader: {
        fontSize: 16
    },

    itemSlelect: {
        margin: 1,
        backgroundColor: '#D3D3D3',
        flex: 1,
        paddingVertical: 30,
        borderRadius: 30,
        paddingLeft:20


    },
    submitButtonView: {
        marginVertical: 20
    },
    submitButton: {
        backgroundColor: "#FBCE5A",
        borderRadius: 30,
        marginHorizontal: 20,
        paddingVertical: 15,
        alignItems: 'center'
    },
    submitFont: {
        color: 'white',
        fontSize: 18,
    },

    textInputView: {
        marginHorizontal: 20,
        flex: 8,
        backgroundColor: 'transparent'
    }, textInputValiue: {
        fontSize: 14,
        color: 'grey',
        marginVertical:10
    },
    textInputValiueIn: {
        fontSize: 14,
        color: 'black'
    },
    textInputViewBtn: {
        paddingVertical: 20

    },
    bordeLine: {
        // marginVertical: 10,
        marginTop: 15,
        backgroundColor: 'grey',

        height: 0.5
    },
});