import { renderComponent , expect } from '../test_helper';
import {shallow, mount} from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import SearchOverlay from '../../src/containers/searchOverlay';
import {store} from '../../src/store/index';


describe('Component: SearchOverlay', () => {
    it('renders search overlay', () => {

        const props = {
            store
        };

        expect(
            shallow(
                <SearchOverlay {...props} />
            ).length
        ).to.equal(1);
    });
});
