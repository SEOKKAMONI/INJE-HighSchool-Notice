import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from "../../assets/Color"


function Lunch() {
    return (
        <View style={styles.content}>
            <TouchableOpacity>
                <View style={styles.LunchContent}>
                    <View style={styles.TextBox}>
                        <Text style={styles.cotentText}>
                            급식표
                        </Text>
                        <Text style={styles.contentSubText}>
                            급식표를 손쉽게 확인할 수 있습니다.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

export default Lunch;

const styles = StyleSheet.create({
    content: {
        marginBottom: 20
    },  
    LunchContent: {
        width: "338px",
        height: "15vh",
        borderRadius: 15,
        padding: 16,
        backgroundColor: theme.LunchBtnBg,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    TextBox: {
        position: "relative",
        top: 20,
    },
    cotentText: {
        fontSize: 23,
        fontWeight: "bold",
        color: "white"
    },
    contentSubText: {
        color: "white"
    },
});