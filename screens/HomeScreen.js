import React, { useEffect, useState, useLayoutEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet, Button, TouchableOpacity } from 'react-native';
import api, { formatPriceBRL } from '../services/api';
import ProductItem from '../components/ProductItem';

const CATEGORIES = ['electronics', 'jewelery', "men's clothing", "women's clothing"];

export default function HomeScreen({ navigation, route }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [error, setError] = useState(null);

  // header: logout (left) and info (right)
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button title="Logout" onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Login' }] })} />
      ),
      headerRight: () => (
        <Button title="Informações" onPress={() => navigation.navigate('GroupInfo')} />
      ),
      title: 'Produtos'
    });
  }, [navigation]);

  useEffect(() => {
    fetchProducts();
  }, [categoryFilter]);

  async function fetchProducts() {
    setLoading(true);
    setError(null);
    try {
      if (categoryFilter) {
        const res = await api.get(`/products/category/${encodeURIComponent(categoryFilter)}`);
        setProducts(res.data || []);
      } else {
        const res = await api.get('/products');
        setProducts(res.data || []);
      }
    } catch (err) {
      console.error(err);
      setError('Falha ao carregar produtos.');
    } finally {
      setLoading(false);
    }
  }

  function clearFilter() {
    setCategoryFilter('');
  }

  function renderItem({ item }) {
    return (
      <ProductItem
        item={item}
        onPress={() => navigation.navigate('ProductDetails', { id: item.id })}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.filterRow}>
        <FlatList
          horizontal
          data={CATEGORIES}
          keyExtractor={(c) => c}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[styles.filterButton, categoryFilter === item && styles.filterButtonActive]}
              onPress={() => setCategoryFilter(item)}
            >
              <Text style={categoryFilter === item ? styles.filterTextActive : styles.filterText}>{item}</Text>
            </TouchableOpacity>
          )}
          showsHorizontalScrollIndicator={false}
        />
        <TouchableOpacity style={styles.clearBtn} onPress={clearFilter}>
          <Text style={{ color: '#fff' }}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 20 }} />
      ) : error ? (
        <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(p) => String(p.id)}
          renderItem={renderItem}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  filterRow: { padding: 10, flexDirection: 'row', alignItems: 'center' },
  filterButton: { paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, borderWidth: 1, borderColor: '#ccc', marginRight: 8 },
  filterButtonActive: { backgroundColor: '#333', borderColor: '#333' },
  filterText: { color: '#333' },
  filterTextActive: { color: '#fff' },
  clearBtn: { marginLeft: 6, backgroundColor: '#007bff', paddingVertical: 6, paddingHorizontal: 12, borderRadius: 6 },
});
