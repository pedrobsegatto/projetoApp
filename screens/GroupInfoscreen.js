import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function GroupInfoScreen() {
  // Substitua pelos membros do seu grupo
  const members = [
    { name: 'Lauro Dariva Ferneda', ra: '1136899' },
    { name: 'Pedro Bohnen Segatto', ra: '1136047' },
    { name: 'Pedro de Oliveira Souza Leal', ra: '1136365' }
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Sobre o App</Text>
      <Text style={styles.paragraph}>
        Este aplicativo consome a Fake Store API para demonstração de autenticação, listagem de produtos,
        filtros por categoria e exibição de detalhes. Desenvolvido com React Native (Expo). Primeiro foi feita a base do código, 
        com todas as suas funcionalidades. Após isso, realizamos a correção de erros e melhoramos alguns pontos da estilização do app.
      </Text>

      <Text style={[styles.title, { marginTop: 16 }]}>Integrantes</Text>
      {members.map((m, idx) => (
        <View key={idx} style={styles.member}>
          <Text style={styles.name}>{m.name}</Text>
          <Text style={styles.ra}>RA: {m.ra}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 18, fontWeight: '700' },
  paragraph: { marginTop: 8, lineHeight: 20 },
  member: { marginTop: 12, paddingVertical: 8, borderBottomWidth: 1, borderColor: '#eee' },
  name: { fontWeight: '600' },
  ra: { color: '#666' },
});
