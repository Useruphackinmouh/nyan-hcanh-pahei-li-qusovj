
import React from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable, Alert } from "react-native";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';

export default function SettingsScreen() {
  const settingsItems = [
    {
      id: 'reset-data',
      title: 'إعادة تعيين جميع البيانات',
      subtitle: 'مسح جميع البيانات والإحصائيات',
      emoji: '🗑️',
      action: 'reset',
      color: '#DC3545'
    },
    {
      id: 'help',
      title: 'المساعدة وكيفية الاستخدام',
      subtitle: 'دليل استخدام التطبيق',
      emoji: '❓',
      route: '/help',
      color: '#17A2B8'
    },
    {
      id: 'about',
      title: 'حول البوت',
      subtitle: 'معلومات عن التطبيق والمطور',
      emoji: 'ℹ️',
      route: '/about',
      color: '#6F42C1'
    }
  ];

  const handleMenuPress = (item: any) => {
    console.log(`Settings action: ${item.id}`);
    
    if (item.action === 'reset') {
      Alert.alert(
        'إعادة تعيين البيانات',
        'هل أنت متأكد من رغبتك في مسح جميع البيانات والإحصائيات؟ لا يمكن التراجع عن هذا الإجراء.',
        [
          {
            text: 'إلغاء',
            style: 'cancel',
          },
          {
            text: 'تأكيد المسح',
            style: 'destructive',
            onPress: () => {
              console.log('Data reset confirmed');
              Alert.alert('تم المسح', 'تم مسح جميع البيانات بنجاح');
            },
          },
        ]
      );
    } else if (item.route) {
      router.push(item.route as any);
    }
  };

  const handleBackPress = () => {
    console.log('Going back to main menu');
    router.back();
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: "الإعدادات",
          headerTitleStyle: {
            fontFamily: 'Cairo_700Bold',
            fontSize: 20,
          },
          headerStyle: {
            backgroundColor: '#F8F9FA',
          },
          headerTintColor: '#6A1B9A',
        }}
      />
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerSection}>
            <View style={styles.settingsIcon}>
              <Text style={styles.settingsEmoji}>⚙️</Text>
            </View>
            <Text style={styles.sectionTitle}>إعدادات التطبيق</Text>
            <Text style={styles.sectionSubtitle}>
              إدارة البيانات والحصول على المساعدة
            </Text>
          </View>

          {/* Settings Items */}
          <View style={styles.menuContainer}>
            {settingsItems.map((item) => (
              <Pressable
                key={item.id}
                style={[styles.menuItem, { borderLeftColor: item.color }]}
                onPress={() => handleMenuPress(item)}
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

          {/* App Info */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>تطبيق المعرفة الإسلامية</Text>
            <Text style={styles.infoVersion}>الإصدار 1.0.0</Text>
            <Text style={styles.infoDescription}>
              تطبيق تعليمي يهدف إلى نشر المعرفة الإسلامية وتطوير مهارات المتعلمين
              في مختلف العلوم الشرعية والقرآنية
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
  settingsIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#6A1B9A20',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingsEmoji: {
    fontSize: 36,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6A1B9A',
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
    marginBottom: 32,
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
  infoContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
    borderLeftWidth: 4,
    borderLeftColor: '#6A1B9A',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A1B9A',
    fontFamily: 'Cairo_700Bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  infoVersion: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'center',
    marginBottom: 12,
  },
  infoDescription: {
    fontSize: 14,
    color: '#495057',
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
