import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const CreateRepository = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Nome do Repositorio"
        placeholderTextColor={'#444'}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Data de criação"
        placeholderTextColor={'#444'}
        autoCapitalize="none"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Criar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    marginTop: 20,
    borderRadius: 8,
    height: 44,
    width: '90%',
  },
  button: {
    backgroundColor: '#8a07da',
    marginTop: 50,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default CreateRepository;
