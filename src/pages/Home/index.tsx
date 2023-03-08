import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {INav} from '../../interfaces/INav';
import {IUser} from '../../interfaces/IUser';
import {buscarUsuario} from '../../services/requisicoes/usuario';

const Home = () => {
  const [userName, setUseName] = useState('');
  const [user, setUser] = useState<IUser | undefined>();

  const navigation = useNavigation();

  const buscar = async () => {
    const res = await buscarUsuario(userName);
    setUseName('');
    if (res) {
      setUser(res);
    } else {
      Alert.alert('Usuario não encontrado');
      setUser(undefined);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {user && (
          <>
            <View style={styles.background} />
            <View style={styles.imageArea}>
              <Image
                source={{
                  uri: user.avatar_url,
                }}
                style={styles.image}
              />
            </View>
            <Text style={styles.textName}>{user.name}</Text>
            <Text style={styles.textEmail}>{user.email}</Text>
            <View style={styles.followersArea}>
              <View style={styles.followers}>
                <Text style={styles.followersNumber}>{user.followers}</Text>
                <Text style={styles.followersText}>Seguidores</Text>
              </View>
              <View style={styles.followers}>
                <Text style={styles.followersNumber}>{user.following}</Text>
                <Text style={styles.followersText}>Seguindo</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                /** @ts-ignore */
                navigation.navigate('Repositorys', {id: user.id});
              }}>
              <Text style={styles.respositorys}>Ver os repositorios</Text>
            </TouchableOpacity>
          </>
        )}
        <TextInput
          placeholder="Busque por um usuário"
          placeholderTextColor={'#444'}
          autoCapitalize="none"
          style={styles.input}
          value={userName}
          onChangeText={setUseName}
        />
        <TouchableOpacity style={styles.button} onPress={buscar}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    marginBottom: 20,
  },
  background: {
    backgroundColor: '#c4c4c4',
    width: '100%',
    height: 156,
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    marginTop: 40,
    borderRadius: 8,
    height: 44,
    width: '90%',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  imageArea: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: -75,
    backgroundColor: '#FFF',
  },
  textName: {
    fontSize: 21,
    fontWeight: '600',
    color: '#45565f',
    padding: 15,
  },
  textEmail: {
    fontSize: 17,
    color: '#717e84',
    marginTop: 5,
  },
  followers: {
    margin: 20,
    alignItems: 'center',
  },
  followersArea: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  followersNumber: {
    color: '#8a07da',
    fontSize: 15,
  },
  followersText: {
    color: '#95a8b2',
    fontSize: 13,
    marginTop: 5,
  },
  respositorys: {
    color: '#9507da',
    fontSize: 15,
    fontWeight: '400',
  },
  button: {
    backgroundColor: '#8a07da',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

export default Home;
