import { Modal, Text, TouchableOpacity, View } from "react-native";
import React, { FC } from "react";
import { CustomAlertProps } from "./types";

export const CustomAlert: FC<CustomAlertProps> = ({
  isTitle,
  visible,
  onVisible,
  onConfirm,
  title,
  titleColor,
  titlePosition,
  message,
  messageColor,
  actionText = "ok",
  fontSize = 24,
  backgroundColor = "#FFFFFF",
  buttonColor = "#279EFF",
  buttonTextColor = "white",
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      style={{ zIndex: 1100 }}
      onRequestClose={() => onVisible(false)}
      statusBarTranslucent
      onDismiss={() => onVisible(false)}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#rgba(0, 0, 0, 0.5)",
          zIndex: 1000,
        }}
      >
        <View
          style={{
            backgroundColor: backgroundColor,
            height: "auto",
            width: "90%",
            borderRadius: 10,
            padding: 20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ width: "90%" }}>
            {isTitle && (
              <Text
                style={{
                  position: "relative",
                  fontWeight: "bold",
                  fontSize: 28,
                  color: titleColor ? titleColor : "#000000",
                  textAlign: titlePosition,
                  marginBottom: 20,
                }}
              >
                {title}
              </Text>
            )}
            <Text
              style={{
                position: "relative",
                fontWeight: "bold",
                fontSize: 22,
                color: messageColor ? messageColor : "#000000",
                textAlign: "center",
              }}
            >
              {message}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 10, width: "90%" }}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onConfirm()}
            style={{
              minHeight:20,
              padding: 10,
              backgroundColor: buttonColor,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontSize: fontSize,
                fontWeight: "700",
                color: buttonTextColor,
              }}
            >
              {actionText}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
