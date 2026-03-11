import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import styles from './styles';

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
