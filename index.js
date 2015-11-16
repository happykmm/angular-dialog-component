

var myApp = angular.module('myApp', ['dialog']);

myApp.controller('myAppCtrl', function($scope) {
    $scope.greeting = 'Hello!';
    $scope.dialogParams = {
        title: "Message - dialogCtrl",
        content: "This is a message from dialogCtrl",
        onOk: function() {
            console.log("dialog click on ok");
        },
        onCancel: function() {
            console.log("dialog cancel");
        },
        onClose: function() {
            console.log("dialog close");
        }
    }
    setTimeout(function() {
        $scope.dialogApi.show();
    }.bind(this), 1000);
    setTimeout(function(){
        $scope.dialogApi.hide();
    }.bind(this), 10000);
});


