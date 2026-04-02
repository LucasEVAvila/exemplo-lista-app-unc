import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { useState } from 'react';

const nomesIniciais = [
  "Fazer o Trabalho do Luis",
  "Montar o móvel",
  "Arrumar as Malas",
];

export default function App() {
  var [nomes, setNomes] = useState(nomesIniciais);
  var [novoNome, setNovoNome] = useState('');
  // Estado para controlar quais itens estão concluídos
  var [concluidos, setConcluidos] = useState(new Array(nomesIniciais.length).fill(false));

  const adicionarNome = () => {
    if (novoNome.trim() !== '') {
      setNomes([...nomes, novoNome.trim()]);
      setConcluidos([...concluidos, false]); // novo item começa como não concluído
      setNovoNome('');
    }
  };

  const toggleConcluido = (index) => {
    const novoConcluidos = [...concluidos];
    novoConcluidos[index] = !novoConcluidos[index];
    setConcluidos(novoConcluidos);
  };

  return (
    <View style={styles.container}>
      {nomes.map((nome, index) => (
        <View key={index} style={styles.elemtentos}>
          <Pressable onPress={() => toggleConcluido(index)} style={styles.checkboxContainer}>
            <View style={[styles.checkbox, concluidos[index] && styles.checkboxChecked]}>
              {concluidos[index] && <Text style={styles.checkmark}>✓</Text>}
            </View>
            <Text style={[styles.itens, concluidos[index] && styles.itemConcluido]}>
              {nome}
            </Text>
          </Pressable>
        </View>
      ))}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Próxima Tarefa:"
          placeholderTextColor="#aaa"
          value={novoNome}
          onChangeText={setNovoNome}
          onSubmitEditing={adicionarNome}
        />
        <Pressable style={styles.botao} onPress={adicionarNome}>
          <Text style={styles.textoBotao}>ADD</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  textoBotao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#2563eb', // azul principal
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 20,
    width: '100%',
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    backgroundColor: '#1f2937', // cinza escuro elegante
    color: '#f9fafb',
    padding: 12,
    borderRadius: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#3b82f6', // azul mais claro
  },
  elemtentos: {
    backgroundColor: '#1d4ed8', // azul mais profundo
    borderRadius: 16,
    marginTop: 8,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#93c5fd', // azul claro suave
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    backgroundColor: '#3b82f6',
  },
  checkmark: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itens: {
    color: '#e5e7eb',
    fontSize: 16,
    fontWeight: '800',
    flex: 1,
  },
  itemConcluido: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  container: {
    flex: 1,
    backgroundColor: '#020617', // quase preto com tom azulado
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#f1f5f9',
    fontSize: 26,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: 16,
    marginTop: 8,
  },
});
