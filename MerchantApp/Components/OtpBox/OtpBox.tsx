import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';


const OtpBox = (props: any) => {
    const [otp, setOtp] = useState<string[]>(new Array(props.count).fill(''));
    const [error, setError] = useState<boolean>(false);
    const inputRef0 = useRef<TextInput>();
    const inputRef1 = useRef<TextInput>();
    const inputRef2 = useRef<TextInput>();
    const inputRef3 = useRef<TextInput>();

    const refs = [
        inputRef0,
        inputRef1,
        inputRef2,
        inputRef3
    ]

    useEffect(() => {
        inputRef0.current?.focus();
    }, [])

    const handleChangeText = (value: any, index: any) => {
        if (isNaN(value)) return false;
        setOtp([...otp.map((v, i) => (i === index) ? value : v)]);
        if (refs[index + 1] && value !== '') {
            refs[index + 1].current?.focus();
        }

    }

    const handleFocusPrev = (event: any, index: number) => {
        if (event.nativeEvent.key === 'Backspace' && otp[index] === '') {
            if (refs[index - 1]) {
                refs[index - 1].current?.focus();
            }
        }
    }
    const submitOtp = () => {
        if (otp.some(e => e === '')) {
            setError(true);
            return;
        }


    }
    console.log('otp----->', otp, otp.some(e => e === ''))

    return (
        <View style={{ flex: 1, marginHorizontal: 20 }}>
            <View style={styles.otpBoxConteiner}>
                {otp.map((element, index) => (
                    <TextInput
                        ref={refs[index]}
                        style={[styles.otpBox, { borderColor: error ? 'red' : '#8d949e' }]}
                        key={index}
                        maxLength={1}
                        selectTextOnFocus
                        keyboardType='numeric'
                        value={element}
                        onFocus={() => setError(false)}
                        onBlur={() => setError(false)}
                        onChangeText={(newValue) => handleChangeText(newValue, index)}
                        onKeyPress={event => { handleFocusPrev(event, index) }}
                    />
                ))}

            </View>
            <Pressable style={styles.button} onPress={submitOtp}>
                <Text style={styles.btntext}>დადასტურება</Text>
            </Pressable>
        </View>);
}


const styles = StyleSheet.create({
    otpBoxConteiner: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    otpBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderRadius: 7,

        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 20,
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        width: '100%',
        height: 60,
        marginTop: 20,
        backgroundColor: '#ffda02',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    btntext: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },
})


export default OtpBox;


