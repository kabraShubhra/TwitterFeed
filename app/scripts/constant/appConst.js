'use strict';

/**
 * @ngdoc function
 * @name zetaApp.constant:AppConst
 * @description constants of app defined
 * # AppConst
 * Controller of the zetaApp
 */

angular.module('zetaApp').constant('AppConst',
{
  'templateUrl':{
    'header':'views/head.tpl.html'
  },
  'icons':[
      {
          'id' : 'ic1',
          'iconclass' :'fa fa-share'
      },
      {
          'id' : 'ic2',
          'iconclass' :'fa fa-star'
      },
      {
          'id' : 'ic3',
          'iconclass' :'fa fa-refresh'
      },
      {
          'id' : 'ic4',
          'iconclass' :'fa fa-ellipsis-h'
      }
  ],
  'options':[
    {
      id : 'op1',
      title : 'Tweets',
      count: '200'
    },
    {
      id : 'op2',
      title : 'Photo/Video',
      count: '200'
    },
    {
      id : 'op3',
      title : 'Following',
      count: '200'
    },
    {
      id : 'op4',
      title : 'Followers',
      count: '1M'
    },
  ],
  'menus':[
    {
      label:'notification',
      icon:'fa fa-bell-o'
    },
    {
      label:'mail',
      icon:'fa fa-envelope-o'
    },
    {
      label:'tweets',
      icon:'fa fa-hashtag'
    }
  ]
}
);
