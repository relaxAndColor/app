'use strict';

describe('Home page end 2 end testing', function(){

  it('should have a title of Relax And Color', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Relax And Color');
  });

  it('should redirect the user to the home page if false url', function() {
    browser.get('/#/idonotexist');
    expect(element(by.tagName('h3')).getText()).toEqual('Welcome!');
  });
});
