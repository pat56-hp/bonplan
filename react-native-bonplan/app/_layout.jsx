import { Stack } from "expo-router";
import StackComponent from "@/components/stack/StackComponent";
import { SheetProvider } from "react-native-actions-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  AuthContextProvider,
  useAuthStateContext,
} from "@/contexts/AuthContextProvider";
import Toast, {
  BaseToast,
  ErrorToast,
  SuccessToast,
} from "react-native-toast-message";

export default function Layout() {
  const toastConfig = {
    success: (props) => (
      <SuccessToast
        {...props}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          fontSize: 16,
          fontWeight: "400",
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ),
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 16,
          fontWeight: "400",
        }}
        text2Style={{
          fontSize: 15,
        }}
      />
    ) /* 
        tomatoToast: ({ text1, props }) => (
          <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
          </View>
        ) */,
  };

  return (
    <AuthContextProvider>
      <GestureHandlerRootView>
        <SheetProvider>
          <StackComponent>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="auth" options={{ headerShown: false }} />
            <Stack.Screen name="index" options={{ headerShown: false }} />
          </StackComponent>
          <Toast config={toastConfig} />
        </SheetProvider>
      </GestureHandlerRootView>
    </AuthContextProvider>
  );
}
