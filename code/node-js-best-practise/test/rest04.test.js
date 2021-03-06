/**
 * Created by Admin on 2017/6/9.
 */
var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is running.
var server = supertest.agent("http://localhost:3000");

// UNIT test begin
describe("SAMPLE unit test", function () {

// #1 should return home page
  it("should return home page", function (done) {
    done();
    //--------------------------------
  });

  it("should add two number", function (done) {
//calling ADD api
    server
      .post('/add')
      .send({num1: 10, num2: 20})
      .expect("Content-type", / json /)
      .expect(200)
      .end(function (err, res) {
        res.status.should.equal(200);
        res.body.error.should.equal(false);
        res.body.data.should.equal(30);
        done();
      });
  });

  it("should return 404", function (done) {
    //---------------------------
    done();
  });
});