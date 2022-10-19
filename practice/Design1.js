import { StyleSheet, View, Text } from 'react-native';

export default function Design1() {
  return (
    <View style={styles.main_block}>
      {/* Row 1 */}
      <View style={styles.row_block}>
        <View style={[styles.block, { backgroundColor: '#000000' }]} />
        <View style={[styles.block, { backgroundColor: '#1a1a1a' }]} />
        <View style={[styles.block, { backgroundColor: '#333333' }]} />
      </View>
      {/* Row 2 */}
      <View style={styles.row_block}>
        <View style={[styles.block, { backgroundColor: '#4d4d4d' }]} />
        <View style={[styles.block, { backgroundColor: '#666666' }]} />
        <View style={[styles.block, { backgroundColor: '#808080' }]} />
      </View>
      {/* Row 3 */}
      <View style={styles.row_block}>
        <View style={[styles.block, { backgroundColor: '#999999' }]} />
        <View style={[styles.block, { backgroundColor: '#b3b3b3' }]} />
        <View style={[styles.block, { backgroundColor: '#cccccc' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_block: {
    marginTop: 40,
    backgroundColor: '#e6e6e6',
  },
  row_block: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 5,
  },
  block: {
    width: 75,
    height: 75,
    margin: 5,
  },
});
