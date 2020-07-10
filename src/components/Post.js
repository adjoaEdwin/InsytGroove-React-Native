import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {SafeAreaView} from 'react-native-safe-area-context';

const Post = ({title, body, id}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Post Detail', {title, body, id})}>
        <Card>
          <View>
            <View style={styles.name}>
              <Text style={styles.title} h4>
                {title}
              </Text>
              <Text style={styles.body}>{body}</Text>
            </View>
            <Icon name="comment" size={20} color="#f50" />
          </View>
        </Card>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  name: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: '600',
  },
  body: {
    textTransform: 'capitalize',
  },
});

export default Post;
