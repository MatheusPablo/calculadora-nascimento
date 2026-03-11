import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar as RNStatusBar,
} from 'react-native';

export default function App() {
  const [idade, setIdade] = useState('');
  const [diaNascimento, setDiaNascimento] = useState('');
  const [mesNascimento, setMesNascimento] = useState('');

  const calcularAnoNascimento = () => {
    const idadeNum = parseInt(idade);
    const diaNum = parseInt(diaNascimento);
    const mesNum = parseInt(mesNascimento);

    if (isNaN(idadeNum) || isNaN(diaNum) || isNaN(mesNum)) return null;
    if (idadeNum < 0 || idadeNum > 150) return null;
    if (diaNum < 1 || diaNum > 31) return null;
    if (mesNum < 1 || mesNum > 12) return null;

    const hoje = new Date();
    const diaAtual = hoje.getDate();
    const mesAtual = hoje.getMonth() + 1;
    const anoAtual = hoje.getFullYear();

    let anoNascimento = anoAtual - idadeNum;

    if (mesNum > mesAtual || (mesNum === mesAtual && diaNum > diaAtual)) {
      anoNascimento = anoNascimento - 1;
    }

    return anoNascimento;
  };

  const resultado = calcularAnoNascimento();

  return (
    <View style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.emoji}>🎂</Text>
            <Text style={styles.titulo}>Calculadora de</Text>
            <Text style={styles.subtitulo}>Ano de Nascimento</Text>
          </View>

          <View style={styles.card}>
            <View style={styles.campo}>
              <Text style={styles.label}>Sua idade atual</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 25"
                placeholderTextColor="#8E99A4"
                keyboardType="numeric"
                maxLength={3}
                value={idade}
                onChangeText={setIdade}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.campo}>
              <Text style={styles.label}>Dia de nascimento</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 15"
                placeholderTextColor="#8E99A4"
                keyboardType="numeric"
                maxLength={2}
                value={diaNascimento}
                onChangeText={setDiaNascimento}
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.campo}>
              <Text style={styles.label}>Mês de nascimento</Text>
              <TextInput
                style={styles.input}
                placeholder="Ex: 7"
                placeholderTextColor="#8E99A4"
                keyboardType="numeric"
                maxLength={2}
                value={mesNascimento}
                onChangeText={setMesNascimento}
              />
            </View>
          </View>

          <View style={styles.resultadoContainer}>
            {resultado !== null ? (
              <>
                <Text style={styles.resultadoLabel}>Você nasceu em</Text>
                <Text style={styles.resultadoAno}>{resultado}</Text>
              </>
            ) : (
              <Text style={styles.resultadoPlaceholder}>
                Preencha todos os campos para descobrir seu ano de nascimento
              </Text>
            )}
          </View>

          <Text style={styles.rodape}>
            Data de hoje:{' '}
            {new Date().toLocaleDateString('pt-BR')}
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1A1A2E',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: (RNStatusBar.currentHeight || 44) + 16,
    paddingBottom: 40,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
  },
  titulo: {
    fontSize: 18,
    color: '#B0BEC5',
    fontWeight: '300',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitulo: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '700',
    marginTop: 4,
  },
  card: {
    width: '100%',
    backgroundColor: '#16213E',
    borderRadius: 20,
    padding: 24,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  campo: {
    marginVertical: 8,
  },
  label: {
    fontSize: 13,
    color: '#8E99A4',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#0F3460',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  divider: {
    height: 1,
    backgroundColor: '#0F3460',
    marginVertical: 8,
  },
  resultadoContainer: {
    marginTop: 32,
    width: '100%',
    backgroundColor: '#E94560',
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    minHeight: 110,
    justifyContent: 'center',
  },
  resultadoLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.8)',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1.5,
  },
  resultadoAno: {
    fontSize: 56,
    color: '#FFFFFF',
    fontWeight: '800',
    marginTop: 4,
  },
  resultadoPlaceholder: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    lineHeight: 22,
  },
  rodape: {
    marginTop: 24,
    fontSize: 13,
    color: '#5C6B77',
  },
});
