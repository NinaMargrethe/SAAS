import { renderComponent , expect } from '../test_helper';
import {shallow, mount, render} from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import SearchOverlay from '../../src/containers/searchOverlay';
import {store} from '../../src/store/index';
import ReactModal from 'react-modal';
import { Jumbotron, Button, Glyphicon, Modal, ModalHeader, ModalBody } from 'react-bootstrap';


describe('Component: SearchOverlay', () => {

    let wrapper;

    beforeEach(() => {
        const props = {
            store
        };
        wrapper = shallow(<SearchOverlay {...props} />)
    });

    it('renders search overlay', () => {
        expect(wrapper.length).to.equal(1);
    });

    it('should show welcome message on initial render', () => {
        const message = 'OBS!';
        const jumbo = wrapper.shallow(<Jumbotron></Jumbotron>);
        expect(jumbo.find('h1').text()).to.eq(message);
    });

    it('should contain button to open search modal', () => {
        const jumbo = wrapper.shallow(<Jumbotron></Jumbotron>)
        expect(jumbo.find('button'));
    });

    it('should click button to open the search modal', () => {
        const mockOnClick = sinon.spy();
        const button = mount(<Button onClick={mockOnClick}/>);
        button.find('button').simulate('click');
        expect(mockOnClick.called).to.be.true;
    });

    it('should render the modal', () => {
        const props = {
            isOpen: true
        };

        expect(
            shallow(
                <ReactModal {...props} ></ReactModal>
            ).length
        ).to.equal(1);
    });


});
