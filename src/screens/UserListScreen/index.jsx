import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getUsersList} from '../../services/UserList';
import Typography from '../../components/Typography';
import UserCard from '../../components/UserCard';

const UsersList = () => {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const [endOfPage, setEndOfPage] = useState(false);
  const [checkedState, setCheckedState] = useState({});
  const [disabledUserId, setDisabledUserId] = useState(null);

  const getUsers = async () => {
    if (endOfPage) return;

    const response = await getUsersList(page);

    if (response?.status_code === 200) {
      const newUsers = response?.data?.users;

      if (newUsers.length === 0) {
        setEndOfPage(true);
      } else {
        setList(prev => [...prev, ...newUsers]);

        setCheckedState(prev =>
          newUsers.reduce((acc, user) => {
            acc[user.id] = prev[user.id] || false;
            return acc;
          }, {...prev}),
        );
      }
    }
  };

  useEffect(() => {
    getUsers();
  }, [page]);

  const handleCheckChange = (id) => {
    setCheckedState(prev => {
      const newCheckedState = {...prev, [id]: !prev[id]};
      if (newCheckedState[id]) {
        setDisabledUserId(id);
      } else {
        setDisabledUserId(null);
      }
      return newCheckedState;
    });
  };

  const renderItem = ({item, index}) => {
    const itemId = item?.id || index;

    return (
      <UserCard
        item={item}
        isChecked={!!checkedState[itemId]}
        checkBoxDisabled={disabledUserId && disabledUserId !== itemId}
        onCheckChange={() => handleCheckChange(itemId)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={(item, index) => item?.id ? item.id.toString() : index.toString()}
        ListEmptyComponent={() => <Typography>Empty</Typography>}
        showsVerticalScrollIndicator={false}
        onEndReached={() => {
          if (!endOfPage) setPage(prev => prev + 1);
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
};

export default UsersList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
})