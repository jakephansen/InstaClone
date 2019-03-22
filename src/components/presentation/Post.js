import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from "react-native";
import config from "../../config"

class Post extends Component {


constructor(){
  super();
  this.state = {
    liked: false,
    screenWidth: 0
  };
}

likeToggled(){
  this.setState({
    liked: !this.state.liked
  })
}
componentDidMount(){
  this.setState({
    screenWidth: Dimensions.get("window").width
  })

}


  render() {
    const heartIconColor = (this.state.liked) ? 'rgb(252,61,57)': null;
    return (
        <View>
        <View style={styles.userBar}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image style={styles.userPic} source ={require('../../img/profile.jpg')} />
            <Text style={{marginHorizontal: 10,}}> Jake Hansen </Text>

          </View>
          <View style={{alignItems: 'center', paddingBottom: 15,}}>
          <Text style={{fontSize: 36, }}> ... </Text>

          </View>

        </View>
        <TouchableOpacity activeOpacity={0.7} onPress={() =>{
          this.likeToggled();
        }}>

          <Image style={{width: this.state.screenWidth, height: this.state.screenWidth*1.1}} source ={require('../../img/pic.jpg')} />
        </TouchableOpacity>
        <View style={styles.iconBar}>
          <Image style={[styles.icon, {tintColor: heartIconColor,}]} source={config.images.heartIcon}/>
          <Image style={styles.icon} source={config.images.chatIcon} />
          <Image style={styles.icon} source={config.images.arrowIcon} />

        </View>
        <View style={styles.iconBar}>
          <Image style={{height: 30, width: 30}} source={config.images.heartIcon} />
          <Text> 100 likes </Text>

        </View>

      </View>
    );
  }
}

export default Post;


const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 75,
    marginTop: 20,
    backgroundColor: 'rgb(250,250,250)',
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center'

  },
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: 'rgb(250,250,250)',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    alignItems: 'center',

  },

  icon: {
    height: 40,
    width: 40,
    marginLeft: 10

  },

})
