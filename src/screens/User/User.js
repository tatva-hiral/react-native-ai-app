import React from 'react';
import {ScrollView, View} from 'react-native';
// import external libraries
import {Divider, Text} from 'react-native-elements';
// import PropTypes from 'prop-types';
// custom component, constant and style
import NavHeader from '../../components/NavHeader';
import displayStyles from '../../theme/displayStyles';
import styles from './styles';
import spacing from '../../theme/spacing';
import typography from '../../theme/typography';

const userDetails = {
  Name: 'Hiral',
  Desciption: 'Test',
};
const UserScreen = () => {
  return (
    <>
      <NavHeader withHeader />
      <ScrollView style={[displayStyles.container]}>
        <View>
          <Text h2>{userDetails.Name}</Text>
          <View style={styles.fromDivider}>
            <Divider />
          </View>
          <View>
            <Text style={[spacing.mt2, typography.bodyMedium]}>
              Lorem ipsum
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

UserScreen.propTypes = {
  // navigation: PropTypes.object
};

export default UserScreen;
