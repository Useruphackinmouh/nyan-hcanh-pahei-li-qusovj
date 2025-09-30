
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';

export default function QuestionsScreen() {
  const questionsMenuItems = [
    {
      id: 'new-test',
      title: 'بدء اختبار جديد',
      subtitle: 'ابدأ اختبار شامل جديد',
      emoji: '🚀',
      route: '/quiz',
      color: '#28A745'
    },
    {
      id: 'continue',
      title: 'استكمال من آخر سؤال',
      subtitle: 'تابع من حيث توقفت',
      emoji: '📋',
      route: '/continue-quiz',
      color: '#FFC107'
    },
    {
      id: 'stats',
      title: 'إحصائياتي الشخصية',
      subtitle: 'عرض تقدمك ونتائجك',
      emoji: '📊',
      route: '/stats',
      color: '#17A2B8'
    },
    {
      id: 'leaderboard',
      title: 'قائمة المتصدرين',
      subtitle: 'أفضل المتسابقين',
      emoji: '🏆',
      route: '/leaderboard',
      color: '#FD7E14'
    },
    {
      id: 'reset',
      title: 'إعادة التقييم من جديد',
      subtitle: 'مسح البيانات والبدء من جديد',
      emoji: '🗑️',
      route: '/reset',
      color: '#DC3545'
    }
  ];

  const knowledgeAreas = [
    {
      id: 'prayer',
      title: 'الصلاة',
      subtitle: 'أحكام فقهية متقدمة',
      emoji: '📿',
      route: '/knowledge/prayer',
      color: '#6F42C1'
    },
    {
      id: 'aqeedah',
      title: 'العقيدة',
      subtitle: 'مسائل عقدية أساسية',
      emoji: '🕌',
      route: '/knowledge/aqeedah',
      color: '#20C997'
    },
    {
      id: 'fasting',
      title: 'الصوم',
      subtitle: 'أحكام الصيام والزكاة',
      emoji: '🌙',
      route: '/knowledge/fasting',
      color: '#6610F2'
    },
    {
      id: 'tawheed',
      title: 'التوحيد',
      subtitle: 'أنواع التوحيد والشرك',
      emoji: '☝️',
      route: '/knowledge/tawheed',
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
          title: "الأسئلة",
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
          {/* Header */}
          <View style={styles.headerSection}>
            <Text style={styles.sectionTitle}>قسم الأسئلة الرئيسي</Text>
            <Text style={styles.sectionSubtitle}>اختر نوع الاختبار المناسب لك</Text>
          </View>

          {/* Main Actions */}
          <View style={styles.menuContainer}>
            {questionsMenuItems.map((item) => (
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

          {/* Knowledge Areas */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>أقسام المعرفة الإسلامية</Text>
            <Text style={styles.sectionSubtitle}>اختبارات متخصصة في مجالات مختلفة</Text>
          </View>

          <View style={styles.menuContainer}>
            {knowledgeAreas.map((item) => (
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
    marginBottom: 24,
    paddingVertical: 16,
  },
  sectionHeader: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 32,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2E7D32',
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
  },
  menuContainer: {
    marginBottom: 16,
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
  backButton: {
    backgroundColor: '#6C757D',
    borderRadius: 12,
    padding: 16,
    marginTop: 24,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'center',
  },
});
