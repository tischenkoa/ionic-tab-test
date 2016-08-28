/**
 * Created by Artur on 28.08.16.
 */
describe('starter', function () {

    beforeEach(module('starter'));

    describe('service', function () {
      it('auth', inject(function (AuthorizationService) {
        expect(AuthorizationService.auth('admin', 'admin')).toBe(true);
      }))
    });

    describe('events', function () {

      beforeEach(angular.mock.inject(function (_AuthorizationService_, $templateCache) {
        var AuthorizationService = _AuthorizationService_;
        spyOn(AuthorizationService, 'auth').and.returnValues(true);
        $templateCache.put('templates/login.html', '');
        $templateCache.put('templates/tab-account.html', '');
        $templateCache.put('templates/chat-detail.html', '');
        $templateCache.put('templates/tab-chats.html', '');
      }));

      it('check event', inject(function ($state, AuthorizationService) {
       AuthorizationService.auth();
       $state.go('tab.chats');
       expect(AuthorizationService.auth).toHaveBeenCalled();
       }));

      it("not authorization", function () {
        inject(function ($state, $rootScope, AuthorizationService) {
          $state.go("tab.chats");
          $rootScope.$digest();
          expect($state.current.name).toEqual("login");
        })
      })
    });

  }
);
