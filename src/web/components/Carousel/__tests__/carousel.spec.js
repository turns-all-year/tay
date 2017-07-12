/* eslint-env node, mocha */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import FakeComponent from 'app/helpers/FakeComponent';

import { Carousel } from 'app/components/carousels/Carousel';

// const video = require('stubs/video.json');

describe('Carousel.jsx', () => {

    let component;

    const props = {
        children: [FakeComponent],
        touchExperience: true,
        initialClientRender: true,
        tileConfig: {
            maxWidth: 100,
            tilesPerPage: 1,
        },
    };

    beforeEach(() => {
        component = shallow(<Carousel {...props} />);
    });

    afterEach(() => {

    });

    it('should have a container', () => {
        expect(component.find('.carousel').length).toEqual(1);
    });

    it('should have content', () => {
        expect(component.find('.content').length).toEqual(1);
    });

    it('should have a tile', () => {
        expect(component.find('.carousel-tile-wrapper').length).toEqual(1);
    });

    it('should have .is-touch-experience if (touchExperience)', () => {
        expect(component.find('.is-touch-experience').length).toEqual(1);
    });

    it('should have .is-mouse-experience if (!touchExperience)', () => {
        const altProps = { ...props };
        altProps.touchExperience = false;
        const altComponent = shallow(<Carousel {...altProps} />);

        expect(altComponent.find('.is-mouse-experience').length).toEqual(1);
    });

    it('should have a translate the content correctly', () => {
        const altProps = { ...props };
        altProps.touchExperience = false;
        const altComponent = shallow(<Carousel {...altProps} />);

        altComponent.setState({ page: 2 });
        const content = altComponent.find('.content');

        expect(content.props().style.transform.indexOf('translate3d(-200%')).toBeGreaterThan(-1);
    });

});
