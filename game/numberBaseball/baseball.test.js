import chai from 'chai';

const {expect} = chai;

import {execute} from "./baseball.js"

const isEmpty = execute

describe('isEmpty', () => {
  context('with ""', () => {
    it('should return true', function () {
      expect(isEmpty("")).to.eql(true);
    });
  });
});
