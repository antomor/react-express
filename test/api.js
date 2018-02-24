var request = require('request');
var chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();

let server = require('../app');

chai.use(chaiHttp);

describe('/api/duplication/string ', () => {
  const baseAddress = '/api/duplication/string'
  it('returns 404 if called without parameter ', (done) => {
    chai.request(server)
      .get(baseAddress)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

  it('returns 200 if called with parameters: <value>', (done) => {
    const valueTest = 'test';
    chai.request(server)
      .get(`${baseAddress}/${valueTest}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        res.body.length.should.be.above(0);
        done();
      });
  });

  it('returns 200 if called with parameters: <value> and <length> ', (done) => {
    const valueTest = 'test';
    const length = 2;
    chai.request(server)
      .get(`${baseAddress}/${valueTest}?length=${length}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.length.should.be.above(0);
        done();
      });
  });
});