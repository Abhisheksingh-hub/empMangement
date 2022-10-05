import React, { useState } from 'react';
import { Dimensions, Button, Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Calendar, CalendarList, Agenda } from 'react-native-calendars'
import { useSelector, useDispatch } from 'react-redux';
import { fromDate, getDateData, toDate } from '../Redux/Actions/DateStore';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

const DateSelection = props => {
    const fromDate = useSelector((store) => store.fromDate.fromDate);
    const toDate = useSelector((store) => store.fromDate.toDate);

    const [fromDateVal, setFromDateVal] = useState(null)

    const [toDateVal, setToDateVal] = useState(null)


    const dispatch = useDispatch();

    const onDateChange = (date, type) => {
        let dateVal = moment(date).format("MM/DD/YYYY")
        console.log("dateVal date", date, dateVal);
        if (type == 'START_DATE' && date) {
            setFromDateVal(dateVal)
        } else if (type == 'END_DATE' && date) {
            setToDateVal(dateVal)
        }

    }

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

 
                    <View style={styles.middleViewInnerThree}>
                        <CalendarPicker
                            allowRangeSelection={true}
                            selectedDayTextColor='white'
                            selectedRangeStyle={styles.calencerSelectionVirew}
                            onDateChange={(date, type) => onDateChange(date, type)}
                            minRangeDuration = {1}
                            maxRangeDuration= {30}                         
                        />
                        <View style={styles.submitButtonView}>


                            <TouchableOpacity
                                style={styles.submitButton}
                                onPress={() => {
                                    let objFrom = { dateType: 'fromDate', day: fromDateVal }
                                    let objTo = { dateType: 'toDate', day: toDateVal }

                                    dispatch(getDateData(objFrom)),
                                        dispatch(getDateData(objTo)),
                                            props.navigation.navigate('NewRequest')
                                
                                }
                                }>

                                <Text style={styles.submitFont}>
                                    Select
                                </Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>



            </View>
        </SafeAreaView>
    );
};

export default DateSelection;
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
    calencerSelectionVirew: {


        backgroundColor: '#FBCE5A',


    },
    valueStyle: {
        marginTop: 5,
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
        paddingLeft: 20


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
        color: 'grey'
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