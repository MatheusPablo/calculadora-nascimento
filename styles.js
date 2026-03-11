import { StyleSheet, StatusBar as RNStatusBar } from 'react-native';

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

export default styles;
