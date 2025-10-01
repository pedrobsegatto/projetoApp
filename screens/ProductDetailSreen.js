import React, { useEffect, useState } from 'react';
import { View, Text, Image, ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import api from '../services/api';
import { formatPriceBRL } from '../services/api';

export default function ProductDetailsScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  async function fetchProduct() {
    setLoading(true);
    setError(null);
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.error(err);
      setError('Falha ao carregar detalhes do produto.');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <ActivityIndicator size="large" style={{ marginTop: 40 }} />;
  }

  if (error) {
    return <View style={{ padding: 16 }}><Text style={{ color: 'red' }}>{error}</Text></View>;
  }

  if (!product) {
    return <View style={{ padding: 16 }}><Text>Nenhum produto encontrado.</Text></View>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.desc}>{product.description}</Text>
      <Text style={styles.price}>{formatPriceBRL(product.price)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16, alignItems: 'center', backgroundColor: '#fff' },
  image: { width: 200, height: 200, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '700', textAlign: 'center' },
  category: { marginTop: 8, fontStyle: 'italic', color: '#777' },
  desc: { marginTop: 16, textAlign: 'left' },
  price: { marginTop: 12, fontSize: 16, fontWeight: '700' },
});
