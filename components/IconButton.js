import { TouchableOpacity } from "react-native";

export default function IconButton({
  Icon,
  bgStyle,
  bgStyleDisabled,
  iconStyle,
  iconStyleDisabled,
  onPress,
  iconFill = "#FFFFFF",
  width = 24,
  height = 24,
  enabled = true,
}) {
  return (
    <TouchableOpacity
      style={enabled ? bgStyle : bgStyleDisabled}
      onPress={onPress}
    >
      {Icon && (
        <Icon
          style={enabled ? iconStyle : iconStyleDisabled}
          width={width}
          height={height}
          fill={iconFill}
        />
      )}
    </TouchableOpacity>
  );
}
