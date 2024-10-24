export const colors = {
  white: "#FFFFFF",
  black_primary: "#212121",
  black_primary_80: "rgba(33, 33, 33, 0.8)",
  light_gray: "#F6F6F6",
  border_gray: "#E8E8E8",
  blue: "#1B4371",
  orange: "#FF6C00",
  placeholder: "#BDBDBD",
  border_semi_transparent: "rgba(0, 0, 0, 0.3)",
};

export const header = {
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.border_semi_transparent,
  },
  headerTitleStyle: {
    color: colors.black_primary,
    fontSize: 17,
    fontFamily: "Roboto-Medium",
  },
  headerRightContainerStyle: { paddingRight: 16, paddingBottom: 10 },
  headerLeftContainerStyle: { paddingLeft: 16, paddingBottom: 10 },
  headerTitleContainerStyle: { paddingBottom: 11 },
};

export const bottomTab = {
  tabBarStyle: {
    height: 83,
    backgroundColor: colors.white,
    paddingVertical: 9,
    paddingHorizontal: 82,
    borderTopWidth: 0.5,
    borderTopColor: colors.border_semi_transparent,
  },
  iconsWrapper: {
    marginHorizontal: 30,
  },
};
