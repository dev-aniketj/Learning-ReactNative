import React from 'react';
import { Text, ListView } from 'react-native';

// React Native ListView
// Example 1

export default class Example18 extends React.Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        'Android',
        'Java',
        'C++',
        'Python',
        'Ruby',
        'C',
        'PHP',
        'JS',
        'Kotlin',
        'Scala',
        'Go',
      ]),
    };
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text style={{ fontSize: 20 }}>{rowData}</Text>}
      />
    );
  }
}
