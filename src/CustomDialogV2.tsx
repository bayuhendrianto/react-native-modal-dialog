import React, { FC } from "react";
import { Modal, View, Text, TouchableOpacity } from "react-native";
import { CustomDialogInputProps } from "./types";

export const CustomDialogV2: FC<CustomDialogInputProps> = ({
  isTitle,
  isMessage,
  visible,
  onVisible,
  onConfirm,
  title,
  titleColor,
  titleFontSize,
  titlePosition,
  message,
  messageColor,
  messageFontSize,
  messagePosition,
  actionCancelText = "cancel",
  actionConfirmText = "ok",
  backgroundColor = "#FFF8E3",
  buttonCancelColor = "red",
  buttonTextCancelColor = "#FFFFFF",
  buttonConfirmColor = "#40A2D8",
  buttonTextConfirmColor = "#FFFFFF",
  borderColor = "gray",
  fontSize = 24,
  children,
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
            backgroundColor: backgroundColor,
            height: "auto",
            width: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            borderBottomColor: borderColor,
            borderBottomWidth: 3,
          }}
        >
          <View style={{ width: "100%" }}>
            <View style={{ padding: 15 }}>
              {isTitle && (
                <Text
                  style={{
                    position: "relative",
                    fontWeight: "bold",
                    fontSize: titleFontSize,
                    color: titleColor,
                    textAlign: titlePosition,
                    marginBottom: 2,
                  }}
                >
                  {title}
                </Text>
              )}

              {isMessage && (
                <Text
                  style={{
                    fontSize: messageFontSize,
                    color: messageColor,
                    textAlign: messagePosition,
                  }}
                >
                  {message}
                </Text>
              )}
            </View>
            {children}
          </View>
        </View>
        <View style={{ width: "90%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onVisible(false);
              }}
              style={{
                width: "50%",
                minHeight:20,
                padding: 6,
                backgroundColor: buttonCancelColor,
                borderBottomLeftRadius: 10,
                borderRightColor: borderColor,
                borderRightWidth: 1.5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: fontSize,
                  fontWeight: "700",
                  color: buttonTextCancelColor,
                }}
              >
                {actionCancelText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                onVisible(false);
                onConfirm();
              }}
              style={{
                width: "50%",
                minHeight:20,
                padding: 6,
                backgroundColor: buttonConfirmColor,
                borderBottomRightRadius: 10,
                borderLeftColor: borderColor,
                borderLeftWidth: 1.5,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: fontSize,
                  fontWeight: "700",
                  color: buttonTextConfirmColor,
                }}
              >
                {actionConfirmText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
