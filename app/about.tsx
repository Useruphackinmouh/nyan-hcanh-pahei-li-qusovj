
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';

export default function AboutScreen() {
  const features = [
    "اختبارات شاملة في المعرفة الإسلامية",
    "نظام نقاط متقدم مع محاولات متعددة",
    "أقسام متخصصة في العلوم الشرعية",
    "إحصائيات شخصية مفصلة",
    "قائمة المتصدرين التفاعلية",
    "حفظ تلقائي للتقدم",
    "واجهة سهلة الاستخدام",
    "دعم اللغة العربية بالكامل"
  ];

  const handleBackPress = () => {
    console.log('Going back to settings');
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "حول التطبيق",
          headerTitleStyle: {
            fontFamily: 'Cairo_700Bold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#F8F9FA',
          },
          headerTintColor: '#6F42C1',
        }}
      />
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.appIcon}>
              <Text style={styles.appEmoji}>📚</Text>
            </View>
            <Text style={styles.appTitle}>تطبيق المعرفة الإسلامية</Text>
            <Text style={styles.appVersion}>الإصدار 1.0.0</Text>
          </View>

          {/* Description */}
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionTitle}>عن التطبيق</Text>
            <Text style={styles.descriptionText}>
              تطبيق المعرفة الإسلامية هو منصة تعليمية تفاعلية تهدف إلى نشر المعرفة 
              الإسلامية وتطوير مهارات المتعلمين في مختلف العلوم الشرعية والقرآنية. 
              يوفر التطبيق اختبارات شاملة ومتخصصة مع نظام نقاط متقدم وإحصائيات مفصلة.
            </Text>
          </View>

          {/* Features */}
          <View style={styles.featuresCard}>
            <Text style={styles.featuresTitle}>الميزات الرئيسية</Text>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <Text style={styles.featureBullet}>✓</Text>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>

          {/* Mission */}
          <View style={styles.missionCard}>
            <Text style={styles.missionTitle}>رسالتنا</Text>
            <Text style={styles.missionText}>
              نسعى إلى تسهيل تعلم العلوم الإسلامية وجعلها في متناول الجميع من خلال 
              تقنيات حديثة وأساليب تفاعلية ممتعة. هدفنا هو إثراء المعرفة الدينية 
              وتعزيز الفهم الصحيح للإسلام.
            </Text>
          </View>

          {/* Quranic Verse */}
          <View style={styles.verseCard}>
            <Text style={styles.verseText}>
              "وَقُل رَّبِّ زِدْنِي عِلْمًا"
            </Text>
            <Text style={styles.verseReference}>
              سورة طه - آية 114
            </Text>
          </View>

          {/* Technical Info */}
          <View style={styles.techCard}>
            <Text style={styles.techTitle}>المعلومات التقنية</Text>
            <View style={styles.techInfo}>
              <Text style={styles.techItem}>• تطوير: React Native + Expo</Text>
              <Text style={styles.techItem}>• الخطوط: Cairo Font Family</Text>
              <Text style={styles.techItem}>• دعم: iOS و Android</Text>
              <Text style={styles.techItem}>• اللغة: العربية</Text>
            </View>
          </View>

          {/* Back Button */}
          <Pressable
            style={styles.backButton}
            onPress={handleBackPress}
            android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
          >
            <Text style={styles.backButtonText}>🔙 العودة للإعدادات</Text>
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
  appIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#6F42C120',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appEmoji: {
    fontSize: 48,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6F42C1',
    fontFamily: 'Cairo_700Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  appVersion: {
    fontSize: 16,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
  },
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    fontFamily: 'Cairo_700Bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: '#495057',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
    lineHeight: 24,
  },
  featuresCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  featuresTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    fontFamily: 'Cairo_700Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureBullet: {
    fontSize: 16,
    color: '#28A745',
    marginRight: 8,
    fontWeight: 'bold',
  },
  featureText: {
    flex: 1,
    fontSize: 14,
    color: '#495057',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'right',
  },
  missionCard: {
    backgroundColor: '#E8F5E8',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#28A745',
  },
  missionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#155724',
    fontFamily: 'Cairo_700Bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  missionText: {
    fontSize: 14,
    color: '#155724',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
    lineHeight: 24,
  },
  verseCard: {
    backgroundColor: '#FFF3CD',
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#FFC107',
  },
  verseText: {
    fontSize: 20,
    color: '#856404',
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'center',
    lineHeight: 32,
    marginBottom: 12,
  },
  verseReference: {
    fontSize: 14,
    color: '#856404',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
  },
  techCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  techTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    fontFamily: 'Cairo_700Bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  techInfo: {
    alignItems: 'flex-end',
  },
  techItem: {
    fontSize: 14,
    color: '#495057',
    fontFamily: 'Cairo_400Regular',
    marginBottom: 6,
    textAlign: 'right',
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
