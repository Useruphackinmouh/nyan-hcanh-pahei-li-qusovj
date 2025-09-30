
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';

export default function HelpScreen() {
  const helpSections = [
    {
      title: "كيفية بدء الاختبار",
      content: [
        "اختر 'الأسئلة' من القائمة الرئيسية",
        "اضغط على 'بدء اختبار جديد'",
        "اقرأ السؤال بعناية",
        "اختر الإجابة الصحيحة من الخيارات المتاحة"
      ],
      emoji: "🚀"
    },
    {
      title: "نظام النقاط",
      content: [
        "3 نقاط للإجابة الصحيحة من المحاولة الأولى",
        "2 نقطة للإجابة الصحيحة من المحاولة الثانية",
        "1 نقطة للإجابة الصحيحة من المحاولة الثالثة",
        "لا توجد نقاط إذا فشلت في جميع المحاولات"
      ],
      emoji: "⭐"
    },
    {
      title: "أقسام المعرفة",
      content: [
        "الصلاة: أحكام فقهية متقدمة",
        "العقيدة: مسائل عقدية أساسية",
        "الصوم: أحكام الصيام والزكاة",
        "التوحيد: أنواع التوحيد والشرك",
        "القرآن الكريم: علوم قرآنية متنوعة"
      ],
      emoji: "📚"
    },
    {
      title: "الميزات المتقدمة",
      content: [
        "حفظ تلقائي للتقدم",
        "استكمال الاختبار من آخر نقطة توقف",
        "إحصائيات شخصية مفصلة",
        "قائمة المتصدرين",
        "تفسيرات للإجابات الصحيحة"
      ],
      emoji: "⚙️"
    },
    {
      title: "نصائح للنجاح",
      content: [
        "اقرأ السؤال بعناية قبل الإجابة",
        "فكر جيداً قبل اختيار الإجابة",
        "استفد من التفسيرات المقدمة",
        "راجع إحصائياتك بانتظام",
        "تدرب على الأقسام المختلفة"
      ],
      emoji: "💡"
    }
  ];

  const handleBackPress = () => {
    console.log('Going back to settings');
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "المساعدة",
          headerTitleStyle: {
            fontFamily: 'Cairo_700Bold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#F8F9FA',
          },
          headerTintColor: '#17A2B8',
        }}
      />
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.helpIcon}>
              <Text style={styles.helpEmoji}>❓</Text>
            </View>
            <Text style={styles.sectionTitle}>دليل الاستخدام</Text>
            <Text style={styles.sectionSubtitle}>
              تعلم كيفية استخدام التطبيق بفعالية
            </Text>
          </View>

          {/* Help Sections */}
          {helpSections.map((section, index) => (
            <View key={index} style={styles.helpCard}>
              <View style={styles.helpCardHeader}>
                <Text style={styles.helpEmoji}>{section.emoji}</Text>
                <Text style={styles.helpCardTitle}>{section.title}</Text>
              </View>
              <View style={styles.helpCardContent}>
                {section.content.map((item, itemIndex) => (
                  <View key={itemIndex} style={styles.helpItem}>
                    <Text style={styles.helpBullet}>•</Text>
                    <Text style={styles.helpItemText}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}

          {/* Contact Info */}
          <View style={styles.contactCard}>
            <Text style={styles.contactTitle}>هل تحتاج مساعدة إضافية؟</Text>
            <Text style={styles.contactText}>
              إذا كان لديك أي استفسارات أو اقتراحات، يمكنك التواصل معنا
              من خلال قسم "حول البوت" في الإعدادات.
            </Text>
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
  helpIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#17A2B820',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  helpEmoji: {
    fontSize: 36,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#17A2B8',
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
  helpCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  helpCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 12,
  },
  helpCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    fontFamily: 'Cairo_700Bold',
    marginLeft: 12,
    textAlign: 'right',
    flex: 1,
  },
  helpCardContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  helpBullet: {
    fontSize: 16,
    color: '#17A2B8',
    marginRight: 8,
    marginTop: 2,
  },
  helpItemText: {
    flex: 1,
    fontSize: 14,
    color: '#495057',
    fontFamily: 'Cairo_400Regular',
    lineHeight: 22,
    textAlign: 'right',
  },
  contactCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  contactTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1976D2',
    fontFamily: 'Cairo_600SemiBold',
    marginBottom: 12,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#1565C0',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
    lineHeight: 22,
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
