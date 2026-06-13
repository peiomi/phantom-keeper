import * as Notifications from "expo-notifications";

export async function setupNotifications() {
  await Notifications.requestPermissionsAsync();

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "A presence stirs...",
      body: "Wisp grows restless",
    },
    trigger: { hour: 20, minute: 0, repeats: true },
  });
}
