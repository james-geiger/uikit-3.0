// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by uikit.js.
import { name as packageName } from "meteor/uikit";

// Write your tests here!
// Here is an example.
Tinytest.add('uikit - example', function (test) {
  test.equal(packageName, "uikit");
});
