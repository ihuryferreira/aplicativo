import { View, ScrollView } from "react-native";
import { Header } from "../components/header";

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View style={{ backgroundColor: '#d31414', height: 40}}>
        <Header/>
      </View>
    </ScrollView>
  );
}
