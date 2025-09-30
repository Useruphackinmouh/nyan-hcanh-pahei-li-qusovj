
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { useFonts, Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// Keep splash screen visible while fonts load
SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Cairo_400Regular,
    Cairo_600SemiBold,
    Cairo_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const mainMenuItems = [
    {
      id: 'questions',
      title: 'الأسئلة',
      subtitle: 'اختبار شامل 50 سؤال',
      emoji: '📚',
      route: '/questions',
      color: '#2E7D32'
    },
    {
      id: 'quran',
      title: 'القرآن الكريم',
      subtitle: 'اختبارات متخصصة',
      emoji: '📖',
      route: '/quran',
      color: '#1565C0'
    },
    {
      id: 'settings',
      title: 'إعدادات البوت',
      subtitle: 'الإعدادات والمساعدة',
      emoji: '⚙️',
      route: '/settings',
      color: '#6A1B9A'
    }
  ];

  const handleMenuPress = (route: string) => {
    console.log(`Navigating to: ${route}`);
    router.push(route as any);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "المعرفة الإسلامية",
          headerTitleStyle: {
            fontFamily: 'Cairo_700Bold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#F8F9FA',
          },
          headerTintColor: '#2E7D32',
        }}
      />
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <View style={styles.headerSection}>
            <Text style={styles.welcomeText}>مرحباً بك في</Text>
            <Text style={styles.appTitle}>تطبيق المعرفة الإسلامية</Text>
            <Text style={styles.subtitle}>اختبر معلوماتك الدينية وطور مهاراتك</Text>
          </View>

          {/* Main Menu */}
          <View style={styles.menuContainer}>
            {mainMenuItems.map((item) => (
              <Pressable
                key={item.id}
                style={[styles.menuItem, { borderLeftColor: item.color }]}
                onPress={() => handleMenuPress(item.route)}
                android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
              >
                <View style={styles.menuItemContent}>
                  <View style={[styles.emojiContainer, { backgroundColor: item.color + '20' }]}>
                    <Text style={styles.emoji}>{item.emoji}</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.menuTitle}>{item.title}</Text>
                    <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
                  </View>
                  <View style={styles.arrowContainer}>
                    <Text style={styles.arrow}>←</Text>
                  </View>
                </View>
              </Pressable>
            ))}
          </View>

          {/* Footer */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>
              "وَقُل رَّبِّ زِدْنِي عِلْمًا"
            </Text>
            <Text style={styles.footerSubtext}>
              سورة طه - آية 114
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 32,
    paddingVertical: 20,
  },
  welcomeText: {
    fontSize: 16,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    marginBottom: 8,
    textAlign: 'center',
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    fontFamily: 'Cairo_700Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
    lineHeight: 22,
  },
  menuContainer: {
    marginBottom: 32,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  emojiContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  emoji: {
    fontSize: 24,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#212529',
    fontFamily: 'Cairo_600SemiBold',
    marginBottom: 4,
    textAlign: 'right',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'right',
  },
  arrowContainer: {
    marginLeft: 8,
  },
  arrow: {
    fontSize: 20,
    color: '#6C757D',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
    marginTop: 20,
  },
  footerText: {
    fontSize: 18,
    color: '#2E7D32',
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'center',
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
  },
});
