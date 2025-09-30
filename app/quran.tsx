
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';

export default function QuranScreen() {
  const quranSections = [
    {
      id: 'quran-sciences',
      title: 'علوم القرآن',
      subtitle: 'أصول وقواعد علوم القرآن',
      emoji: '🔬',
      route: '/quran/sciences',
      color: '#007BFF'
    },
    {
      id: 'scientific-miracles',
      title: 'الإعجاز العلمي',
      subtitle: 'الإعجاز العلمي في القرآن',
      emoji: '🔬',
      route: '/quran/miracles',
      color: '#28A745'
    },
    {
      id: 'quran-studies',
      title: 'علوم القرآن',
      subtitle: 'دراسات قرآنية متقدمة',
      emoji: '📚',
      route: '/quran/studies',
      color: '#6F42C1'
    },
    {
      id: 'rhetoric',
      title: 'البلاغة القرآنية',
      subtitle: 'البيان والبديع والمعاني',
      emoji: '🎨',
      route: '/quran/rhetoric',
      color: '#FD7E14'
    },
    {
      id: 'advanced-tafseer',
      title: 'التفسير المتقدم',
      subtitle: 'تفسير آيات مختارة',
      emoji: '🔍',
      route: '/quran/tafseer',
      color: '#20C997'
    },
    {
      id: 'quranic-studies',
      title: 'الدراسات القرآنية',
      subtitle: 'مناهج الدراسات القرآنية',
      emoji: '📖',
      route: '/quran/quranic-studies',
      color: '#E83E8C'
    }
  ];

  const handleMenuPress = (route: string) => {
    console.log(`Navigating to: ${route}`);
    router.push(route as any);
  };

  const handleBackPress = () => {
    console.log('Going back to main menu');
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "القرآن الكريم",
          headerTitleStyle: {
            fontFamily: 'Cairo_700Bold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#F8F9FA',
          },
          headerTintColor: '#1565C0',
        }}
      />
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.quranIcon}>
              <Text style={styles.quranEmoji}>📖</Text>
            </View>
            <Text style={styles.sectionTitle}>قسم القرآن الكريم المتخصص</Text>
            <Text style={styles.sectionSubtitle}>
              اختبارات متخصصة في علوم القرآن والتفسير والبلاغة
            </Text>
          </View>

          {/* Quran Sections */}
          <View style={styles.menuContainer}>
            {quranSections.map((item) => (
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

          {/* Quranic Verse */}
          <View style={styles.verseContainer}>
            <Text style={styles.verseText}>
              "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ"
            </Text>
            <Text style={styles.verseReference}>
              سورة القمر - آية 17
            </Text>
          </View>

          {/* Back Button */}
          <Pressable
            style={styles.backButton}
            onPress={handleBackPress}
            android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
          >
            <Text style={styles.backButtonText}>🔙 العودة للقائمة الرئيسية</Text>
          </Pressable>
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
  quranIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#1565C020',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  quranEmoji: {
    fontSize: 36,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1565C0',
    fontFamily: 'Cairo_700Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
    lineHeight: 22,
    paddingHorizontal: 20,
  },
  menuContainer: {
    marginBottom: 24,
  },
  menuItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 12,
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
    padding: 16,
  },
  emojiContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emoji: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212529',
    fontFamily: 'Cairo_600SemiBold',
    marginBottom: 4,
    textAlign: 'right',
  },
  menuSubtitle: {
    fontSize: 13,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'right',
  },
  arrowContainer: {
    marginLeft: 8,
  },
  arrow: {
    fontSize: 18,
    color: '#6C757D',
  },
  verseContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#1565C0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  verseText: {
    fontSize: 18,
    color: '#1565C0',
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  verseReference: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#6C757D',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'center',
  },
});
