import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {FlatList} from 'react-native/Libraries/Lists/FlatList';
import {INav} from '../../interfaces/INav';
import {IRepository} from '../../interfaces/IRepository';
import {getRepositorysByUser} from '../../services/requisicoes/repositorys';

const Repositorys = () => {
  const [repo, setRepo] = useState<IRepository[]>([]);

  const route = useRoute().params as {id: number};

  useEffect(() => {
    const getRepos = async () => {
      const res = await getRepositorysByUser(route.id);
      setRepo(res);
    };
    getRepos();
    console.log('🚀 ~ file: index.tsx:11 ~ Repositorys ~ repo:', repo);
  }, []);

  const navigation = useNavigation<INav>();

  const renderItem = (item: IRepository) => {
    return (
      <TouchableOpacity style={styles.repository}>
        <Text style={styles.repositoryName}>{item.name}</Text>
        <Text style={styles.repositoryName}>Atualizado em {item.date}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.repositoryText}>
        {repo.length} repositorios criados
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('CreateRepository');
        }}>
        <Text style={styles.buttonText}>Adicionar novo repositorio</Text>
      </TouchableOpacity>
      <FlatList
        data={repo}
        style={{width: '100%'}}
        renderItem={({item}) => renderItem(item)}
        keyExtractor={item => item.name}
      />
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
