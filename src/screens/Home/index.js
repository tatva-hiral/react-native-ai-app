import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as AuthActions from '../../redux/actions/auth';
import HomeScreen from './Home';

const mapStateToProps = (state) => ({
  userDetails: state.auth.userDetails,
});

const mapDispatchToProps = (dispatch) => {
  const reducerActions = {
    ...AuthActions,
  };
  return {
    actions: bindActionCreators(reducerActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
