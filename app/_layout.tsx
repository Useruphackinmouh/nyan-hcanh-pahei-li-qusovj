
import { Stack, router } from "expo-router";
import { useColorScheme } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect } from "react";
import { SystemBars } from "react-native-edge-to-edge";
import "react-native-reanimated";
import { StatusBar } from "expo-status-bar";
import { useFonts, Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';
import { Button } from "@/components/button";
import {
  DarkTheme,
  DefaultTheme,
  Theme,
  ThemeProvider,
} from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const colorScheme = useColorScheme();

  if (!loaded) {
    return null;
  }

  // Custom theme for Islamic app
  const IslamicTheme: Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#2E7D32',
      background: '#F8F9FA',
      card: '#FFFFFF',
      text: '#212529',
      border: '#E9ECEF',
      notification: '#28A745',
    },
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={IslamicTheme}>
        <SystemBars style="dark" />
        <Stack
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#F8F9FA',
            },
            headerTintColor: '#2E7D32',
            headerTitleStyle: {
              fontFamily: 'Cairo_700Bold',
              fontSize: 18,
            },
            headerBackTitleVisible: false,
            animation: 'slide_from_right',
          }}
        >
          <Stack.Screen name="(index)" options={{ headerShown: false }} />
          <Stack.Screen 
            name="questions" 
            options={{ 
              title: "الأسئلة",
              presentation: 'card'
            }} 
          />
          <Stack.Screen 
            name="quran" 
            options={{ 
              title: "القرآن الكريم",
              presentation: 'card'
            }} 
          />
          <Stack.Screen 
            name="settings" 
            options={{ 
              title: "الإعدادات",
              presentation: 'card'
            }} 
          />
          <Stack.Screen 
            name="quiz" 
            options={{ 
              title: "الاختبار",
              presentation: 'card'
            }} 
          />
          <Stack.Screen 
            name="help" 
            options={{ 
              title: "المساعدة",
              presentation: 'card'
            }} 
          />
          <Stack.Screen 
            name="about" 
            options={{ 
              title: "حول التطبيق",
              presentation: 'card'
            }} 
          />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
          <Stack.Screen name="formsheet" options={{ presentation: "formSheet" }} />
          <Stack.Screen name="transparent-modal" options={{ presentation: "transparentModal" }} />
        </Stack>
        <StatusBar style="dark" />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
