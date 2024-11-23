import { View, Text, StyleSheet } from "react-native";
import React, { useRef, useState } from "react";
import PageComponent from "@/components/PageComponent";
import UserImage from "@/components/images/UserImage";
import { useThemeColor } from "@/hooks/useThemeColor";
import ButtonComponent from "@/components/ButtonComponent";
import CaptureImage from "@/assets/icons/capture.svg";
import UserUpdate from "@/assets/icons/user-update.svg";
import { size } from "@/constants/FontSize";
import UserIcon from "@/assets/icons/user.svg";
import Envelope from "@/assets/icons/envelope.svg";
import PhoneIcon from "@/assets/icons/phone.svg";
import LocationIcon from "@/assets/icons/marker.svg";
import { SheetManager } from "react-native-actions-sheet";
import "@/components/sheets";

export default function Profil() {
  const colors = useThemeColor();
  const [user, setUser] = useState({
    name: "Kouassi",
    lastname: "Patrick Aimé",
    email: "pataime56@gmail.com",
    phone: "+225 07 08 37 77 51",
    location: "Abidjan, Cocody Angré Caféier 5, Côte d'Ivoire",
  });
  return (
    <PageComponent style={{ paddingTop: 20 }}>
      <View style={styles.component}>
        <View style={styles.imageComponent}>
          <View>
            <UserImage
              imageAsset={require("@/assets/images/user.png")}
              style={[styles.imageContainer, { borderColor: colors.tint }]}
            />
            <ButtonComponent
              style={{
                backgroundColor: colors.tintRgba,
                height: 30,
                width: 30,
                alignItems: "center",
                borderRadius: 8,
                position: "absolute",
                bottom: 0,
                right: 0,
                zIndex: 1,
              }}
            >
              <CaptureImage
                width={size.icon}
                height={size.icon}
                fill={colors.tint}
              />
            </ButtonComponent>
          </View>
        </View>
        <View style={styles.bodyComponent}>
          <View style={styles.titleComponent}>
            <Text
              style={{
                fontSize: size.subtitle,
                color: colors.text,
                fontWeight: "bold",
              }}
            >
              Informations personnelles
            </Text>
            <ButtonComponent
              style={{
                backgroundColor: colors.tintRgba,
                height: 30,
                width: 30,
                alignItems: "center",
                borderRadius: 8,
                paddingVertical: 18,
                paddingHorizontal: 18,
              }}
              onPress={() =>
                SheetManager.show("profileSheet", {
                  payload: { user: user, onSet: setUser },
                })
              }
            >
              <UserUpdate
                width={size.icon}
                height={size.icon}
                fill={colors.tint}
              />
            </ButtonComponent>
          </View>
          <View
            style={[
              styles.profileInfo,
              { backgroundColor: colors.textDefault },
            ]}
          >
            <View style={styles.info}>
              <View style={styles.infoTitleSection}>
                <UserIcon
                  width={size.iconInfo}
                  height={size.iconInfo}
                  fill={colors.icon}
                />
                <Text style={[styles.infoTitle, { color: colors.text }]}>
                  Nom
                </Text>
              </View>
              <Text style={[styles.infoText, { color: colors.text }]}>
                {user.name}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.info}>
              <View style={styles.infoTitleSection}>
                <UserIcon
                  width={size.iconInfo}
                  height={size.iconInfo}
                  fill={colors.icon}
                />
                <Text style={[styles.infoTitle, { color: colors.text }]}>
                  Prénom(s)
                </Text>
              </View>
              <Text style={[styles.infoText, { color: colors.text }]}>
                {user.lastname}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.info}>
              <View style={styles.infoTitleSection}>
                <PhoneIcon
                  width={size.iconInfo}
                  height={size.iconInfo}
                  fill={colors.icon}
                />
                <Text style={[styles.infoTitle, { color: colors.text }]}>
                  Contact
                </Text>
              </View>
              <Text style={[styles.infoText, { color: colors.text }]}>
                {user.phone}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.info}>
              <View style={styles.infoTitleSection}>
                <Envelope
                  width={size.iconInfo}
                  height={size.iconInfo}
                  fill={colors.icon}
                />
                <Text style={[styles.infoTitle, { color: colors.text }]}>
                  Email
                </Text>
              </View>
              <Text style={[styles.infoText, { color: colors.text }]}>
                {user.email}
              </Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.info}>
              <View style={styles.infoTitleSection}>
                <LocationIcon
                  width={size.iconInfo}
                  height={size.iconInfo}
                  fill={colors.icon}
                />
                <Text style={[styles.infoTitle, { color: colors.text }]}>
                  Adresse
                </Text>
              </View>
              <Text style={[styles.infoText, { color: colors.text }]}>
                {user.location}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </PageComponent>
  );
}

const styles = StyleSheet.create({
  component: {
    gap: 40,
  },
  imageComponent: {
    alignItems: "center",
    position: "relative",
  },
  imageContainer: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  bodyComponent: {
    flexDirection: "column",
    justifyContent: "flex-start",
    justifyContent: "flex-end",
    gap: 18,
  },
  titleComponent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileInfo: {
    gap: 20,
    padding: 15,
    borderRadius: 20,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    flex: 1,
  },
  infoTitleSection: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    width: "50%",
  },
  infoText: {
    fontSize: size.text,
    width: "50%",
  },
  infoTitle: {
    fontSize: size.text,
    fontWeight: "bold",
  },
  divider: {
    height: 0.5,
    backgroundColor: "#DDDDDD",
  },
});
