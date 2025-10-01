import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import api from '../services/api';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!username || !password) {
      Alert.alert('Erro', 'Preencha username e password.');
      return;
    }

    try {
      setLoading(true);
      
      const usersRes = await api.get('/users');
      const users = usersRes.data || [];

      const found = users.find(u => String(u.username).toLowerCase() === username.toLowerCase());
      if (!found) {
        setLoading(false);
        Alert.alert('Erro', 'Falha ao autenticar. Usuário ou senha inválidos.');
        return;
      }

      
      try {
        const authRes = await api.post('/auth/login', { username, password });
        const token = authRes.data?.token;
        if (token) {
          
          setLoading(false);
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home', params: { token, username } }],
          });
        } else {
          setLoading(false);
          Alert.alert('Erro', 'Credenciais inválidas.');
        }
      } catch (authErr) {
        
        setLoading(false);
        Alert.alert('Erro', 'Falha ao autenticar. Usuário ou senha inválidos.');
      }
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Falha de rede ao consultar usuários.');
      console.error(err);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Username</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        style={styles.input}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : (
        <Button title="Entrar" onPress={handleLogin} />
      )}

      <View style={{ marginTop: 20 }}>
        <Text style={styles.hintTitle}>Como verificar usuários disponíveis:</Text>
        <Text style={styles.hintText}>Consulte GET https://fakestoreapi.com/users</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, flex: 1, backgroundColor: '#fdfff3ff' },
  label: { fontWeight: '600', marginTop: 8 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginTop: 6, borderRadius: 6 },
  hintTitle: { fontWeight: '600', marginBottom: 4 },
  hintText: { color: '#444' },
});
