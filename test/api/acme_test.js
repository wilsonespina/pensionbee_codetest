/* globals api, expect, describe, it */

require('../spec_helper');

const aboutPage = '/content/about-page';
const jobsPage = '/content/jobs';
const valvesPage = '/content/valves';

describe('URLs return a 200 HTTP status code', () => {

  it('about-page should return a 200 response', done => {
    api
      .get(aboutPage)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
  it('jobs page should return a 200 response', done => {
    api
      .get(jobsPage)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
  it('valves page should return a 200 response', done => {
    api
      .get(valvesPage)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});

describe('URLs return correct body from relevant index.md file', () => {

  it('about-page returns relevant index.md file', done => {
    api
      .get(aboutPage)
      .end((err, res) => {
        expect(res.text).to.include('Acme Co. is a reputable maker of widgets and is an international brand.');
        done();
      });
  });
  it('about-page returns relevant index.md file', done => {
    api
      .get(jobsPage)
      .end((err, res) => {
        expect(res.text).to.include('Acme Co. is often seeking candidates in the areas of marketing, finance, customer support and sales.');
        done();
      });
  });
  it('about-page returns relevant index.md file', done => {
    api
      .get(valvesPage)
      .end((err, res) => {
        expect(res.text).to.include('Acme Co. valves are amongst the highest quality in the industry.');
        done();
      });
  });
});


describe('Invalid URLs return a 404 HTTP status code', () => {

  it('invalid URL should return a 404 response', done => {
    api
      .get('/wrongURL')
      .end((err, res) => {
        expect(res.status).to.eq(404);
        done();
      });
  });
});
