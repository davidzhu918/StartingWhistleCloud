// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("signup", function(request, response) {
	var user = new Parse.User();
	user.set("username", request.params.username);
	user.set("password", request.params.password);
	user.set("firstName", request.params.firstName);
	user.set("lastName", request.params.lastName);
	user.set("city", request.params.city);
	user.set("birthday", request.params.birthday);
	user.set("skillLevel", request.params.skillLevel);
	user.set("rating", request.params.rating);

	user.signUp(null, {
  		success: function(user) {
    		response.success();
  		},
  		error: function(user, error) {
    		response.error();
  		}
	});
});
