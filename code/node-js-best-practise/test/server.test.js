/**
 * Created by Admin on 2017/6/9.
 */
var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.
var server = supertest.agent("http://127.0.0.1:8081");


// UNIT test begin
describe("listUsers", function () {
// #1 should return home page
  it("listUsers", function (done) {
// calling home page api
    server
      .get("/listUsers")
      .expect("Content-type", / json /)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
// HTTP status should be 200
        res.status.should.equal(200);
// Error key should be false.
        "a".should.equal("a");
        //res.body.error.should.equal(false);
        //console.log(res);
        //console.log(res.text.length);
        console.log(res.text);
        //res.body.message.should.equal("Hello !");
        done();
      });
  });
});


describe("addUser", function () {
// #1 should return home page
  it("addUser", function (done) {
// calling home page api
    server
      .get("/addUser")
      .expect("Content-type", / json /)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
// HTTP status should be 200
        res.status.should.equal(200);
// Error key should be false.
        //res.body.error.should.equal(false);
        //console.log(res);
        //console.log(res.text.length);
        console.log(res.body);
        //res.body.message.should.equal("Hello !");
        done();
      });
  });
});

describe("getUser", function () {
// #1 should return home page
  it("getUser", function (done) {
// calling home page api
    server
      .get("/1")
      .expect("Content-type", / json /)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
// HTTP status should be 200
        res.status.should.equal(200);
// Error key should be false.
        //res.body.error.should.equal(false);
        //console.log(res);
        //console.log(res.text.length);
        console.log(res.body);
        //res.body.message.should.equal("Hello !");
        done();
      });
  });
});

describe("deleteUser", function () {
// #1 should return home page
  it("deleteUser", function (done) {
// calling home page api
    server
      .delete("/deleteUser")
      .expect("Content-type", / json /)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
// HTTP status should be 200
        res.status.should.equal(200);
// Error key should be false.
        //res.body.error.should.equal(false);
        //console.log(res);
        //console.log(res.text.length);
        console.log(res.body);
        //res.body.message.should.equal("Hello !");
        done();
      });
  });
});

describe("deleteUser", function () {
// #1 should return home page
  it("deleteUser", function (done) {
// calling home page api
    server
      .delete("/2")
      .expect("Content-type", / json /)
      .expect(200) // THis is HTTP response
      .end(function (err, res) {
// HTTP status should be 200
        res.status.should.equal(200);
// Error key should be false.
        //res.body.error.should.equal(false);
        //console.log(res);
        //console.log(res.text.length);
        console.log(res.body);
        //res.body.message.should.equal("Hello !");
        done();
      });
  });
});
