import { Text, View } from "react-native";

const StatBar = ({ label, value, color, style }) => {
  return (
    <View style={{ marginVertical: 6 }}>
      <Text style={[style, { marginBottom: 2 }]}>
        {label}: {Math.round(value)}
      </Text>
      <View
        style={{
          height: 10,
          backgroundColor: "#eee",
          borderRadius: 5,
          borderWidth: 2,
          borderColor: "rgba(255, 183, 213, 0.6)",
          backgroundColor: "rgba(255, 255, 255, 0.3)",
          overflow: "hidden",
        }}
      >
        <View
          style={{
            width: `${value}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
};

export default StatBar;
