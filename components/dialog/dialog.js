angular.module('dialog', [])
    .directive('dialog', function($location) {
        return {
            templateUrl: '/components/dialog/dialog.html',
            transclude: true,
            scope: {
                api: "=",
                params: "="
            },
            link: function(scope) {
                scope.api = {};
                scope.api.show = function() {
                    scope.title = scope.params.title || "Message - default";
                    scope.content = scope.params.content || "This is a default message";
                    scope.$apply(function() {
                        scope.isShow = true;
                    })
                };
                scope.api.hide = function() {
                    scope.$apply(function() {
                        scope.isShow = false;
                    })
                };
            },
            controller: function($scope) {
                $scope.isShow = false;

                $scope.clickOk = function() {
                    if (typeof $scope.params.onOk === "function")
                        $scope.params.onOk();
                    $scope.isShow = false;
                };
                $scope.clickCancel = function() {
                    if (typeof $scope.params.onCancel === "function")
                        $scope.params.onCancel();
                    $scope.isShow = false;
                };
                $scope.clickClose = function() {
                    if (typeof $scope.params.onClose === "function")
                        $scope.params.onClose();
                    $scope.isShow = false;
                }
            }
        }
    });
