'use strict';

import { assert, expect, should, eventually } from 'chai';
import taxonomy from '../../src/processor/taxonomy';

describe('Processor: Taxonomy', () => {

  it('Up & Running', () => {
    expect(taxonomy).to.be.ok;
  });

});
