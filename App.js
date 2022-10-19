import { StyleSheet, View } from 'react-native';
import SumOfTwoNumbers from './practice/SumOfTwoNumbers';
import Design1 from './practice/Design1';
import Example1 from './JavaTPoint/Example1';
import Example2 from './JavaTPoint/Example2';
import Example3 from './JavaTPoint/Example3';
import Example4 from './JavaTPoint/Example4';
import Example5 from './JavaTPoint/Example5';
import Example6 from './JavaTPoint/Example6';
import Example7 from './JavaTPoint/Example7';
import Example8 from './JavaTPoint/Example8';

export default function App() {
  return (
    <View style={styles.view}>
      {/*  <Design1 />  */}
      {/* <SumOfTwoNumbers /> */}

      {/* <Example1 /> */}
      {/* <Example2 /> */}
      {/* <Example3 /> */}
      {/* <Example4 /> */}
      {/* <Example5 /> */}
      {/* <Example6 /> */}
      {/* <Example7 /> */}
      <Example8 />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
});
