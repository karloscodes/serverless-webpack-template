const chai = require("chai");
const sinon = require("sinon");
const handler = require("./handler");

// import chai from 'chai';
// import sinon from 'sinon';
// import * as handler from './handler';

const { expect } = chai;

describe("handler", () => {
  describe(".version", () => {
    it("return the current version", done => {
      handler.version({}, {}, (err, version) => {
        if (err) return done(err);
        expect(version).to.equals("0.0.1");
        return done();
      });
    });
  });
});
