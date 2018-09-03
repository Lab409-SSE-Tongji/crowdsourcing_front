'use strict';

/**
 * 登录 api
 */
angular.module('crowdsourcing')
  .factory('SessionFactory', function($resource, $rootScope, SessionService) {
    var baseUrl = "http://10.60.38.173:18080";
    return {
      login: function(){
        return $resource(baseUrl+ '/oauth/token', {}, {
          'post': {
            method: 'POST'
          }
        });
      },

      register: function(){
        return $resource(XbaseUrl, {}, {
          'post': {
            method: 'POST'
          }
        });
      },

    };

  });
