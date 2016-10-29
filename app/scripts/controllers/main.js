'use strict';

/**
 * @ngdoc function
 * @name zetaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zetaApp
 */
angular.module('zetaApp')
  .controller('MainCtrl', ['AppConst','TweetModel', function (AppConst,TweetModel) {
    this.headTemplate = AppConst.templateUrl.header;
    this.activeTab = 'op1';
    this.userTweets = TweetModel.getTweets();
    this.twitterOptions = AppConst.options;
    this.iconOptions = AppConst.icons;
    this.menus = AppConst.menus;
    this.selectedMenu = this.menus[2].label;
    this.chooseTab = function (tab) {
        this.activeTab = tab;
    };
    this.changeMenu = function (menu) {
        this.selectedMenu = menu.label;
    };

  }]);
