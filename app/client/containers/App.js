import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import userActions from '../actions/user';
// import Login from '../components/Login';

@connect((state) => state)
export default class App extends React.Component {

  getTimeNow(timeZone = 0) {
    const targetTime = new Date();
    const tzDifference = timeZone * 60 + targetTime.getTimezoneOffset();
    const offsetTime = new Date(targetTime.getTime() + tzDifference * 60 * 1000);
    return ((offsetTime.getHours() < 10)?"0":"") + offsetTime.getHours() +":"+ ((offsetTime.getMinutes() < 10)?"0":"") + offsetTime.getMinutes() +":"+ ((offsetTime.getSeconds() < 10)?"0":"") + offsetTime.getSeconds();
  }
  render() {
    // const { user, dispatch } = this.props;
    // const boundUserActions = bindActionCreators(userActions, dispatch);

    return (
      <div>
        <div className="member member--day">
        <img className="member__photo" src="http://orig04.deviantart.net/aded/f/2013/066/c/2/profile_picture_by_naivety_stock-d5x8lbn.jpg"/>
        <span className="member__name">Sam </span>
        <span className="member__country">UK </span>
        <span className="member__time">{ this.getTimeNow(0) }</span>
        </div>
        <div className="member member--day">
          <img className="member__photo" src="http://orig14.deviantart.net/919c/f/2011/359/9/0/profile_picture_by_aqsmorningview_stock-d4k81jt.jpg"/>
          <span className="member__name">Gary </span>
          <span className="member__country">Spain </span>
          <span className="member__time">{ this.getTimeNow(1) }</span>
        </div>
        <div className="member member--day">
          <img className="member__photo" src="http://orig08.deviantart.net/0dd3/f/2013/207/a/2/profile_picture_by_littlebuckaroo_stock-d6fapv9.jpg"/>
          <span className="member__name">Jenny </span>
          <span className="member__country">New York </span>
          <span className="member__time">{ this.getTimeNow(-5) }</span>
        </div>
        <div className="member member--day">
          <img className="member__photo" src="http://d13pix9kaak6wt.cloudfront.net/background/users/k/i/n/kingstock_1423567467_43.jpg"/>
          <span className="member__name">Bob </span>
          <span className="member__country">Portugal </span>
          <span className="member__time">{ this.getTimeNow(0) }</span>
        </div>
        <div className="member member--night">
          <img className="member__photo" src="http://orig05.deviantart.net/8326/f/2012/004/8/9/id_by_gremo_stock-d4lb4yr.jpg"/>
          <span className="member__name">Barry </span>
          <span className="member__country">Tokyo </span>
          <span className="member__time">{ this.getTimeNow(9) }</span>
        </div>
        {
          // !user.loggedIn ?
          // <Login onLogin={ boundUserActions.login } /> :
          // <div>Hi { user.username }!</div>
        }
      </div>
    );
  }
}
