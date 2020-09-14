"use strict";

const url = require('url');

const http = require('http');
const expect = require('expect.js');
const crud   = require('..');

const request  = require('nyks/http/request');
const drain    = require('nyks/stream/drain');

describe("Minimal mock suite", function() {

  var server;

  var target = url.parse("http://127.0.0.1");

  it("SHould create a mock server", function(done) {
    server = http.createServer(crud.static('public'));
    server.listen(0, function() {
      target.port = this.address().port;
      console.log("Server is ready on port", target.port);
      done();
    });
  });


  it("should test PUT", async () => {
    const body = "foo";

    var res = await request({...target, path : "/foo", method : 'PUT'}, body);
    expect(res.statusCode).to.eql(200);

    let payload = await request({...target, path : "/foo"});
    payload = await drain(payload);
    expect(payload.toString()).to.eql(body.toString());
  });


  it("should DELETE a file", async () => {
    let payload = await request({...target, path : "/foo", method : 'DELETE'});
    expect(payload.statusCode).to.eql(200);
  });

  it("should DELETE a file (again)", async () => {
    let payload = await request({...target, path : "/foo", method : 'DELETE'});
    expect(payload.statusCode).to.eql(200);
  });



  it("should test GET on nonobject", async () => {
    let payload = await request({...target, path : "/nonexistant"});
    expect(payload.statusCode).to.eql(404);
  });

});

