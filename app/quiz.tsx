
import React, { useState, useEffect } from "react";
import { Stack, router } from "expo-router";
import { ScrollView, StyleSheet, View, Text, Pressable, Alert, Modal } from "react-native";
import { Cairo_400Regular, Cairo_600SemiBold, Cairo_700Bold } from '@expo-google-fonts/cairo';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  category: string;
  explanation?: string;
}

export default function QuizScreen() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions] = useState(10); // Reduced for demo
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [showFailureModal, setShowFailureModal] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  // Sample questions - in a real app, these would come from a database
  const questions: Question[] = [
    {
      id: 1,
      question: "كم عدد السور في القرآن الكريم؟",
      options: ["112 سورة", "113 سورة", "114 سورة", "115 سورة"],
      correctAnswer: 2,
      category: "القرآن الكريم",
      explanation: "القرآن الكريم يحتوي على 114 سورة"
    },
    {
      id: 2,
      question: "ما هي أركان الإسلام؟",
      options: ["أربعة أركان", "خمسة أركان", "ستة أركان", "سبعة أركان"],
      correctAnswer: 1,
      category: "العقيدة",
      explanation: "أركان الإسلام خمسة: الشهادتان، الصلاة، الزكاة، الصوم، الحج"
    },
    {
      id: 3,
      question: "كم عدد الصلوات المفروضة في اليوم؟",
      options: ["ثلاث صلوات", "أربع صلوات", "خمس صلوات", "ست صلوات"],
      correctAnswer: 2,
      category: "الصلاة",
      explanation: "الصلوات المفروضة خمس: الفجر، الظهر، العصر، المغرب، العشاء"
    },
    {
      id: 4,
      question: "في أي شهر فُرض الصيام؟",
      options: ["شعبان", "رمضان", "شوال", "ذو القعدة"],
      correctAnswer: 1,
      category: "الصوم",
      explanation: "الصيام مفروض في شهر رمضان المبارك"
    },
    {
      id: 5,
      question: "ما هو أول بيت وُضع للناس؟",
      options: ["المسجد النبوي", "المسجد الأقصى", "الكعبة المشرفة", "مسجد قباء"],
      correctAnswer: 2,
      category: "التاريخ الإسلامي",
      explanation: "الكعبة المشرفة هي أول بيت وُضع للناس كما ذكر في القرآن الكريم"
    },
    {
      id: 6,
      question: "كم عدد آيات سورة الفاتحة؟",
      options: ["6 آيات", "7 آيات", "8 آيات", "9 آيات"],
      correctAnswer: 1,
      category: "القرآن الكريم",
      explanation: "سورة الفاتحة تحتوي على 7 آيات"
    },
    {
      id: 7,
      question: "ما هي أطول سورة في القرآن الكريم؟",
      options: ["سورة آل عمران", "سورة البقرة", "سورة النساء", "سورة المائدة"],
      correctAnswer: 1,
      category: "القرآن الكريم",
      explanation: "سورة البقرة هي أطول سورة في القرآن الكريم"
    },
    {
      id: 8,
      question: "في أي عام هجري فُتحت مكة؟",
      options: ["السنة السابعة", "السنة الثامنة", "السنة التاسعة", "السنة العاشرة"],
      correctAnswer: 1,
      category: "التاريخ الإسلامي",
      explanation: "فُتحت مكة في السنة الثامنة من الهجرة"
    },
    {
      id: 9,
      question: "ما هو نصاب الزكاة في الذهب؟",
      options: ["20 مثقالاً", "85 جراماً", "200 درهم", "40 شاة"],
      correctAnswer: 1,
      category: "الزكاة",
      explanation: "نصاب الزكاة في الذهب هو 85 جراماً تقريباً"
    },
    {
      id: 10,
      question: "كم عدد أشهر الحج؟",
      options: ["شهر واحد", "شهران", "ثلاثة أشهر", "أربعة أشهر"],
      correctAnswer: 2,
      category: "الحج",
      explanation: "أشهر الحج ثلاثة: شوال وذو القعدة وذو الحجة"
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered || showFeedback) return;
    
    setSelectedAnswer(answerIndex);
    setShowFeedback(true);
    
    const isCorrect = answerIndex === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      // Calculate points based on attempts
      let points = 0;
      if (attempts === 0) points = 3;
      else if (attempts === 1) points = 2;
      else if (attempts === 2) points = 1;
      
      setScore(score + points);
      setAnswered(true);
      
      setTimeout(() => {
        if (currentQuestion < totalQuestions - 1) {
          nextQuestion();
        } else {
          setShowResult(true);
        }
      }, 2000);
    } else {
      // Wrong answer
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts >= 3) {
        // No more attempts - show failure modal
        setTimeout(() => {
          setShowFailureModal(true);
        }, 1500);
      } else {
        // Reset for next attempt
        setTimeout(() => {
          setSelectedAnswer(null);
          setShowFeedback(false);
        }, 1500);
      }
    }
  };

  const nextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(null);
    setAttempts(0);
    setAnswered(false);
    setShowFeedback(false);
    setShowFailureModal(false);
  };

  const handleNextQuestionFromModal = () => {
    if (currentQuestion < totalQuestions - 1) {
      nextQuestion();
    } else {
      setShowResult(true);
    }
  };

  const handleReturnToMainMenu = () => {
    router.push('/');
  };

  const getAnswerStyle = (index: number) => {
    if (!showFeedback) return styles.option;
    
    if (selectedAnswer === index) {
      const isCorrect = index === questions[currentQuestion].correctAnswer;
      return [styles.option, isCorrect ? styles.correctOption : styles.wrongOption];
    }
    
    return [styles.option, styles.disabledOption];
  };

  const getScorePercentage = () => {
    const maxScore = totalQuestions * 3;
    return Math.round((score / maxScore) * 100);
  };

  const handleBackPress = () => {
    Alert.alert(
      'إنهاء الاختبار',
      'هل أنت متأكد من رغبتك في إنهاء الاختبار؟ سيتم فقدان التقدم الحالي.',
      [
        { text: 'إلغاء', style: 'cancel' },
        { text: 'إنهاء', style: 'destructive', onPress: () => router.back() }
      ]
    );
  };

  const handleFinishQuiz = () => {
    console.log(`Quiz completed. Score: ${score}/${totalQuestions * 3}`);
    router.back();
  };

  if (showResult) {
    return (
      <>
        <Stack.Screen
          options={{
            title: "نتيجة الاختبار",
            headerTitleStyle: {
              fontFamily: 'Cairo_700Bold',
              fontSize: 20,
            },
            headerStyle: {
              backgroundColor: '#F8F9FA',
            },
            headerTintColor: '#28A745',
          }}
        />
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.resultContainer}>
            <View style={styles.resultHeader}>
              <Text style={styles.resultEmoji}>🎉</Text>
              <Text style={styles.resultTitle}>تهانينا!</Text>
              <Text style={styles.resultSubtitle}>لقد أكملت الاختبار</Text>
            </View>

            <View style={styles.scoreCard}>
              <Text style={styles.scoreTitle}>نتيجتك النهائية</Text>
              <Text style={styles.scoreValue}>{score} / {totalQuestions * 3}</Text>
              <Text style={styles.scorePercentage}>{getScorePercentage()}%</Text>
              
              <View style={styles.scoreDetails}>
                <Text style={styles.scoreDetailText}>
                  عدد الأسئلة: {totalQuestions}
                </Text>
                <Text style={styles.scoreDetailText}>
                  النقاط المحققة: {score}
                </Text>
                <Text style={styles.scoreDetailText}>
                  النسبة المئوية: {getScorePercentage()}%
                </Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <Pressable
                style={[styles.actionButton, styles.primaryButton]}
                onPress={handleFinishQuiz}
              >
                <Text style={styles.actionButtonText}>العودة للقائمة الرئيسية</Text>
              </Pressable>
            </View>
          </ScrollView>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: `السؤال ${currentQuestion + 1} من ${totalQuestions}`,
          headerTitleStyle: {
            fontFamily: 'Cairo_600SemiBold',
            fontSize: 18,
          },
          headerStyle: {
            backgroundColor: '#F8F9FA',
          },
          headerTintColor: '#28A745',
          headerLeft: () => (
            <Pressable onPress={handleBackPress} style={styles.headerButton}>
              <Text style={styles.headerButtonText}>إنهاء</Text>
            </Pressable>
          ),
        }}
      />
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Progress Bar */}
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View 
                style={[
                  styles.progressFill, 
                  { width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }
                ]} 
              />
            </View>
            <Text style={styles.progressText}>
              {currentQuestion + 1} من {totalQuestions}
            </Text>
          </View>

          {/* Question Card */}
          <View style={styles.questionCard}>
            <View style={styles.questionHeader}>
              <Text style={styles.categoryText}>
                {questions[currentQuestion].category}
              </Text>
              <Text style={styles.attemptsText}>
                المحاولة: {attempts + 1} من 3
              </Text>
            </View>
            
            <Text style={styles.questionText}>
              {questions[currentQuestion].question}
            </Text>
          </View>

          {/* Options */}
          <View style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <Pressable
                key={index}
                style={getAnswerStyle(index)}
                onPress={() => handleAnswerSelect(index)}
                disabled={answered || showFeedback}
                android_ripple={{ color: 'rgba(0,0,0,0.1)' }}
              >
                <View style={styles.optionContent}>
                  <Text style={styles.optionLetter}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              </Pressable>
            ))}
          </View>

          {/* Score Display */}
          <View style={styles.scoreDisplay}>
            <Text style={styles.scoreDisplayText}>
              النقاط: {score} / {totalQuestions * 3}
            </Text>
          </View>
        </ScrollView>

        {/* Failure Modal */}
        <Modal
          visible={showFailureModal}
          transparent={true}
          animationType="fade"
          onRequestClose={() => setShowFailureModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalEmoji}>😔</Text>
                <Text style={styles.modalTitle}>انتهت المحاولات</Text>
                <Text style={styles.modalSubtitle}>
                  لقد استنزفت محاولاتك الثلاث للإجابة عن هذا السؤال
                </Text>
              </View>

              <View style={styles.correctAnswerSection}>
                <Text style={styles.correctAnswerTitle}>الإجابة الصحيحة:</Text>
                <View style={styles.correctAnswerBox}>
                  <Text style={styles.correctAnswerLetter}>
                    {String.fromCharCode(65 + questions[currentQuestion].correctAnswer)}
                  </Text>
                  <Text style={styles.correctAnswerText}>
                    {questions[currentQuestion].options[questions[currentQuestion].correctAnswer]}
                  </Text>
                </View>
                
                {questions[currentQuestion].explanation && (
                  <View style={styles.explanationSection}>
                    <Text style={styles.explanationTitle}>التفسير:</Text>
                    <Text style={styles.explanationText}>
                      {questions[currentQuestion].explanation}
                    </Text>
                  </View>
                )}
              </View>

              <View style={styles.modalButtons}>
                {currentQuestion < totalQuestions - 1 ? (
                  <Pressable
                    style={[styles.modalButton, styles.nextButton]}
                    onPress={handleNextQuestionFromModal}
                  >
                    <Text style={styles.modalButtonText}>⏭️ السؤال التالي</Text>
                  </Pressable>
                ) : (
                  <Pressable
                    style={[styles.modalButton, styles.finishButton]}
                    onPress={() => setShowResult(true)}
                  >
                    <Text style={styles.modalButtonText}>🏁 إنهاء الاختبار</Text>
                  </Pressable>
                )}
                
                <Pressable
                  style={[styles.modalButton, styles.homeButton]}
                  onPress={handleReturnToMainMenu}
                >
                  <Text style={styles.modalButtonText}>🏠 العودة للقائمة الرئيسية</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  headerButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerButtonText: {
    color: '#DC3545',
    fontFamily: 'Cairo_600SemiBold',
    fontSize: 16,
  },
  progressContainer: {
    marginBottom: 24,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#E9ECEF',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#28A745',
    borderRadius: 4,
  },
  progressText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
  },
  questionCard: {
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
  questionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 12,
    color: '#28A745',
    fontFamily: 'Cairo_600SemiBold',
    backgroundColor: '#28A74520',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  attemptsText: {
    fontSize: 12,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
  },
  questionText: {
    fontSize: 18,
    color: '#212529',
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'right',
    lineHeight: 28,
  },
  optionsContainer: {
    marginBottom: 24,
  },
  option: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#E9ECEF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  correctOption: {
    borderColor: '#28A745',
    backgroundColor: '#28A74510',
  },
  wrongOption: {
    borderColor: '#DC3545',
    backgroundColor: '#DC354510',
  },
  disabledOption: {
    opacity: 0.6,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#6C757D',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
    fontSize: 14,
    fontFamily: 'Cairo_600SemiBold',
    marginRight: 12,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#212529',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'right',
  },
  scoreDisplay: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  scoreDisplayText: {
    fontSize: 16,
    color: '#28A745',
    fontFamily: 'Cairo_600SemiBold',
  },
  resultContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  resultHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  resultEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  resultTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#28A745',
    fontFamily: 'Cairo_700Bold',
    marginBottom: 8,
  },
  resultSubtitle: {
    fontSize: 16,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
  },
  scoreCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    marginBottom: 32,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  scoreTitle: {
    fontSize: 18,
    color: '#6C757D',
    fontFamily: 'Cairo_600SemiBold',
    marginBottom: 16,
  },
  scoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#28A745',
    fontFamily: 'Cairo_700Bold',
    marginBottom: 8,
  },
  scorePercentage: {
    fontSize: 24,
    color: '#28A745',
    fontFamily: 'Cairo_600SemiBold',
    marginBottom: 24,
  },
  scoreDetails: {
    alignItems: 'center',
  },
  scoreDetailText: {
    fontSize: 14,
    color: '#6C757D',
    fontFamily: 'Cairo_400Regular',
    marginBottom: 4,
  },
  actionButtons: {
    width: '100%',
  },
  actionButton: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: '#28A745',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cairo_600SemiBold',
  },
  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  modalEmoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: 'Cairo_700Bold',
    color: '#DC3545',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 16,
    fontFamily: 'Cairo_400Regular',
    color: '#6C757D',
    textAlign: 'center',
    lineHeight: 24,
  },
  correctAnswerSection: {
    marginBottom: 24,
  },
  correctAnswerTitle: {
    fontSize: 16,
    fontFamily: 'Cairo_600SemiBold',
    color: '#28A745',
    marginBottom: 12,
    textAlign: 'right',
  },
  correctAnswerBox: {
    backgroundColor: '#28A74510',
    borderRadius: 12,
    padding: 16,
    borderWidth: 2,
    borderColor: '#28A745',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  correctAnswerLetter: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#28A745',
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 32,
    fontSize: 14,
    fontFamily: 'Cairo_600SemiBold',
    marginRight: 12,
  },
  correctAnswerText: {
    flex: 1,
    fontSize: 16,
    color: '#28A745',
    fontFamily: 'Cairo_600SemiBold',
    textAlign: 'right',
  },
  explanationSection: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  explanationTitle: {
    fontSize: 14,
    fontFamily: 'Cairo_600SemiBold',
    color: '#1976D2',
    marginBottom: 8,
    textAlign: 'right',
  },
  explanationText: {
    fontSize: 14,
    color: '#1565C0',
    fontFamily: 'Cairo_400Regular',
    textAlign: 'right',
    lineHeight: 22,
  },
  modalButtons: {
    gap: 12,
  },
  modalButton: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  nextButton: {
    backgroundColor: '#28A745',
  },
  finishButton: {
    backgroundColor: '#17A2B8',
  },
  homeButton: {
    backgroundColor: '#6C757D',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Cairo_600SemiBold',
  },
});
