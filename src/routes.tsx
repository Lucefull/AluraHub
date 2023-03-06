import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateRepository from './pages/CreateRepository';
import Home from './pages/Home';
import RepositoryInfo from './pages/InfoRepositorys';
import Repositorys from './pages/Repositorys';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{title: 'Perfil', headerTitleAlign: 'center'}}
          component={Home}
        />
        <Stack.Screen name="Repositorys" component={Repositorys} />
        <Stack.Screen name="RepositoryInfo" component={RepositoryInfo} />
        <Stack.Screen name="CreateRepository" component={CreateRepository} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
