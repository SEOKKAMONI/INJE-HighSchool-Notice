import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from "../../assets/Color"

function NoticeButton() {
    return (
        <View style={styles.content}>
            <TouchableOpacity>
                <View style={styles.noticeBoard}>
                    <View style={styles.TextBox}>
                        <Text style={styles.cotentText}>
                            익명 게시판
                        </Text>
                        <Text style={styles.contentSubText}>
                            익명으로 학생들과 소통할수 있습니다.
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default NoticeButton;

const styles = StyleSheet.create({
    content: {
        marginBottom: 20
    },
    noticeBoard: {
        width: "338px",
        height: "113px",
        borderRadius: 15,
        padding: 16,
        backgroundColor: theme.BoardBtnBg,
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