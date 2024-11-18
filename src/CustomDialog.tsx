import React, { FC } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { CustomDialogProps } from "./types";

export const CustomDialog: FC<CustomDialogProps> = ({
  isTitle,
  visible,
  onVisible,
  onConfirm,
  title,
  titleColor,
  titlePosition,
  titleFontSize,
  message,
  messageColor,
  messageFontSize,
  actionCancelText = "cancel",
  actionConfirmText = "ok",
  backgroundColor = "#FFF8E3",
  buttonCancelColor = "red",
  buttonTextCancelColor = "#FFFFFF",
  buttonConfirmColor = "#40A2D8",
  buttonTextConfirmColor = "#FFFFFF",
  fontSize = 24
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      style={{ zIndex: 1100 }}
      onRequestClose={() => onVisible(false)}
      statusBarTranslucent
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
            backgroundColor: backgroundColor ? backgroundColor : "#FFFFFF",
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
                  fontSize: titleFontSize ? titleFontSize : 24,
                  color: titleColor ? titleColor : "#000000",
                  textAlign: titlePosition,
                  marginBottom: 20,
                }}
              >
                {title ? title : "Dialog Title"}
              </Text>
            )}
            <Text
              style={{
                position: "relative",
                fontWeight: "bold",
                fontSize: messageFontSize ? messageFontSize : 22,
                color: messageColor ? messageColor : "#000000",
                textAlign: "center",
              }}
            >
              {message ? message : "Dialog Messages"}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 5, width: "90%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onVisible(false);
              }}
              style={{
                width: "49%",
                minHeight:20,
                padding: 10,
                backgroundColor: buttonCancelColor ? buttonCancelColor : "red",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: fontSize,
                  fontWeight: "700",
                  color: buttonTextCancelColor
                    ? buttonTextCancelColor
                    : "#FFFFFF",
                }}
              >
                {actionCancelText ? actionCancelText : "cancel"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onVisible(false);
                onConfirm();
              }}
              style={{
                width: "49%",
                minHeight:20,
                padding: 10,
                backgroundColor: buttonConfirmColor
                  ? buttonConfirmColor
                  : "#40A2D8",
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: fontSize,
                  fontWeight: "700",
                  color: buttonTextConfirmColor
                    ? buttonTextConfirmColor
                    : "#FFFFFF",
                }}
              >
                {actionConfirmText ? actionConfirmText : "ok"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
