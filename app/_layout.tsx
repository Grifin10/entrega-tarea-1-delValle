import { Tabs } from "expo-router";
import FontAwsome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
  <Tabs>
    <Tabs.Screen
      name="cards"
      options={{
        title: "Cards",
        tabBarIcon: ({ color }) => <FontAwsome name="credit-card" size={25}/>
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        tabBarIcon: ({ color }) => <FontAwsome name="user" size={25}/>
      }}
    />
    <Tabs.Screen
      name="counter"
      options={{
        title: "Counter",
        tabBarIcon: ({ color }) => <FontAwsome name="hashtag" size={25}/>
      }}
    />
      <Tabs.Screen
      name="gallery"
      options={{
        title: "Gallery",
        tabBarIcon: ({ color }) => <FontAwsome name="table" size={25}/>
      }}
    />
  </Tabs>);
}
