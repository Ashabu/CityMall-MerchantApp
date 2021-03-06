import React from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import AppButton from './AppButton';

const ConfirmationModal = (props: any) => {
    const { modalVisible, closeModal, onReverseTransaction, isLoading } = props;
    return (
        <View >
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    closeModal;
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalText}>დარწმუნებული ხართ რომ გსურთ ტრანზაქციის გაუქმება?</Text>
                        </View>
                        <View style={styles.buttons}>
                            <AppButton
                                btnStyle={[styles.button, styles.btnDanger]}
                                buttonTitle='არა'
                                titleStyle={styles.btnText}
                                onPress={closeModal}
                                isLoading={false} />

                            <AppButton
                                btnStyle={[styles.button, styles.btnGreen]}
                                buttonTitle='დიახ'
                                titleStyle={styles.btnText}
                                onPress={onReverseTransaction}
                                isLoading={isLoading} />

                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#000000a3',
        
    },

    modalView: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: "white",
        borderRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },

    modalContent: {
        padding: 20,
    },

    buttons: {
        width: '100%',
        flexDirection: 'row'

    },

    button: {
        width: '50%',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },

    btnGreen: {
        backgroundColor: 'green',
        borderBottomRightRadius: 7,
    },

    btnDanger: {
        backgroundColor: 'red',
        borderBottomLeftRadius: 7,
    },

    btnText: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },

    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center'
    }
});

export default ConfirmationModal;