'use strict';
/**
 * @ngdoc function
 * @name zetaApp.factory:TweetModel
 * @description
 * # TweetModel
 * Factory of the zetaApp
 */
angular.module('zetaApp')
  .service('TweetModel',function () {
    var tweets = angular.extend({});
    tweets.model = [
      {
        id : 'tw1',
        userid: 'kerem',
        username: 'Kerem Suer',
        userimage: 'assets/images/user1.png',
        time: '2m',
        content : {
          text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          image : '',
          video: ''
        }
      },
      {
        id : 'tw2',
        userid: 'axel_harman',
        username: 'AxellHarman',
        userimage: 'assets/images/user2.png',
        time: '1h',
        content : {
          text : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          image :'',
          video: ''
        }
      },
      {
        id : 'tw3',
        userid: 'kerem',
        username: 'Kerem Suer',
        userimage: 'assets/images/user1.png',
        time: '5h',
        content : {
          text : '',
          image : '',
          video: 'assets/images/big_buck_bunny.mp4'
        }
      },
      {
        id : 'tw4',
        userid: 'kerem',
        username: 'Kerem Suer',
        userimage: 'assets/images/user1.png',
        time: 'yesterday',
        content : {
          text : 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
          image : '',
          video: ''
        }
      },
    ];

    return {
      getTweets:function(){
        return tweets.model;
      }
    };
  });
