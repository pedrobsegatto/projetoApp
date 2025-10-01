import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { formatPriceBRL } from '../services/api';

export default function ProductItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{formatPriceBRL(item.price)}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  image: { width: 70, height: 70, marginRight: 12 },
  info: { flex: 1 },
  title: { fontSize: 14, fontWeight: '600' },
  price: { marginTop: 6, fontWeight: '700' },
});
