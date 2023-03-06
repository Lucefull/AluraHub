import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {INav} from '../../interfaces/INav';
import {IRepository} from '../../interfaces/IRepository';

const Repositorys = () => {
  const [repo, setRepo] = useState<IRepository[]>([]);

  const navigation = useNavigation<INav>();
  return (
    <View style={styles.container}>
      <Text style={styles.repositoryText}>
        {repo.length} repositorios criados{' '}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CreateRepository');
        }}>
        <Text style={styles.buttonText}>Adicionar novo repositorio</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  repositoryText: {
    fontSize: 21,
    fontWeight: '600',
    color: '#45565f',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  repository: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  repositoryName: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#8a07da',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default Repositorys;
