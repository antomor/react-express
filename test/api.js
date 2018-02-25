const request = require('request');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const expect = chai.expect;

let server = require('../app');

chai.use(require('chai-json-schema'));
chai.use(chaiHttp);

const positiveResponseSchema = {
  title: 'Positive response',
  type: 'object',
  required: ['duplicates'],
  properties: {
    duplicates: {
      type: 'array',
      minItems: 0,
      uniqueItems: true,
      items: {
        type: 'object',
        required: ['key', 'value'],
        properties: {
          key: {
            type: 'string'
          },
          value: {
            type: 'number'
          },
        }
      }
    }
  }
}

const errorResponseSchema = {
  title: 'Error response',
  type: 'object',
  required: ['error'],
  properties: {
    error: {
      type: 'object',
      properties: {
        msg: {
          type: 'string'
        }
      }
    }
  }
}

describe('The API: /api/duplication/string', () => {
  const baseAddress = '/api/duplication/string'

  describe('without parameters', () => {
    it('returns 404', (done) => {
      chai.request(server)
        .get(baseAddress)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe('setting the parameter "value" ', () => {
    it('returns error message with non-alpha-numeric string value="abga_"', (done) => {
      const valueTest = 'abga_';
      const expected = [];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}`)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.to.be.jsonSchema(errorResponseSchema);
          done();
        });
    });

    it('returns NO duplicates with value="abcdefghijklmnopqrstuvz1234567890"', (done) => {
      const valueTest = 'abcdefghijklmnopqrstuvz';
      const expected = [];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.have.lengthOf(0);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });

    it('returns duplicates with alpha-numeric value="aabcc1232c1"', (done) => {
      const valueTest = 'aabcc1232c1';
      const expected = [{
        "key": "1",
        "value": 2
      }, {
        "key": "2",
        "value": 2
      }, {
        "key": "a",
        "value": 2
      }, {
        "key": "c",
        "value": 3
      }, {
        "key": "c1",
        "value": 2
      }];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });


    it('returns 2 duplicates with value="aaabb"', (done) => {
      const valueTest = 'aabbb';
      const expected = [{
          "key": "a",
          "value": 2
        },
        {
          "key": "b",
          "value": 3
        }
      ];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.have.lengthOf(2);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });

    it('returns all duplicates with value="abbab"', (done) => {
      const valueTest = 'abbab';
      const expected = [{
          "key": "a",
          "value": 2
        },
        {
          "key": "ab",
          "value": 2
        },
        {
          "key": "b",
          "value": 3
        }
      ];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });

    it('returns all the duplicates with value="bbbaacbbbaa"', (done) => {
      const valueTest = 'bbbaacbbbaa';
      const expected = [{
        "key": "b",
        "value": 6
      }, {
        "key": "bb",
        "value": 2
      }, {
        "key": "bbb",
        "value": 2
      }, {
        "key": "bbba",
        "value": 2
      }, {
        "key": "bbbaa",
        "value": 2
      }, {
        "key": "bba",
        "value": 2
      }, {
        "key": "bbaa",
        "value": 2
      }, {
        "key": "ba",
        "value": 2
      }, {
        "key": "baa",
        "value": 2
      }, {
        "key": "a",
        "value": 4
      }, {
        "key": "aa",
        "value": 2
      }];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });
  });

  describe('setting both "value" and "length"', () => {
    it('returns 2 duplicates with value="aaacbb" and length=1', (done) => {
      const valueTest = 'aaabb';
      const length = 1;
      const expected = [{
          "key": "a",
          "value": 3
        },
        {
          "key": "b",
          "value": 2
        }
      ];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}?length=${length}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });

    it('returns 2 duplicates with value="abbab" and length=1', (done) => {
      const valueTest = 'abbab';
      const length = 1;
      const expected = [{
          "key": "a",
          "value": 2
        },
        {
          "key": "b",
          "value": 3
        }
      ];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}?length=${length}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });

    it('returns 2 duplicates with value="bbbaabbbaa" and length=1', (done) => {
      const valueTest = 'bbbaabbbaa';
      const length = 1;
      const expected = [{
          "key": "b",
          "value": 6
        },
        {
          "key": "a",
          "value": 4
        }
      ];
      chai.request(server)
        .get(`${baseAddress}/${valueTest}?length=${length}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.to.be.jsonSchema(positiveResponseSchema);
          expect(res.body.duplicates).to.deep.equal(expected);
          done();
        });
    });


  });

});