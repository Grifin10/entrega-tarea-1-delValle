import { Tabs } from "expo-router";
import FontAwsome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
  <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        title: "Tarjetas",
        tabBarIcon: ({ color }) => <FontAwsome name="credit-card" size={25}/>
      }}
    />
    <Tabs.Screen
      name="perfil"
      options={{
        title: "Perfil",
        tabBarIcon: ({ color }) => <FontAwsome name="user" size={25}/>
      }}
    />
    <Tabs.Screen
      name="contador"
      options={{
        title: "Contador",
        tabBarIcon: ({ color }) => <FontAwsome name="hashtag" size={25}/>
      }}
    />
  </Tabs>);
}
