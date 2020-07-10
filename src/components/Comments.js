import React, {useState, useEffect, useCallback} from 'react';
import {Comments} from '../db/constants';
import {getMany, realm} from '../db/schema';
import {FlatList, View} from 'react-native';
import {Text} from 'react-native-elements';
import Comment from './Comment';

const AllComments = ({id}) => {
  const [comments, setComments] = useState([]);

  const getComments = useCallback(async () => {
    let res = await getMany(Comments);
    let results = res.filtered('postId == $0', id);
    const response = results.sorted('timestamp', true);
    setComments(response);
  }, [id]);

  useEffect(() => {
    realm.addListener('change', () => {
      getComments();
    });

    return () => {
      realm.removeAllListeners();
    };
  }, [getComments]);

  return (
    <View>
      <Text h4>Comments</Text>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment body={item.body} />}
        keyExtractor={item => item.uuid}
      />
    </View>
  );
};

export default AllComments;
