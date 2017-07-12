/* eslint-env node, mocha */
import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import FakeComponent from 'app/helpers/FakeComponent';

const ArrowPager = require('app/components/pagers/ArrowPager');
const _ArrowPager = ArrowPager.default;

import { CarouselControls } from 'app/components/carousels/Carousel/Controls';

describe('CarouselControls.jsx', () => {

    let component;

    const props = {
        page: 0,
        numberOfTiles: 12,
        tilesPerPage: 3,
        setPage: expect.createSpy(),
    };

    beforeEach(() => {
        ArrowPager.default = FakeComponent;
        component = shallow(<CarouselControls {...props} />);
    });

    afterEach(() => {
        ArrowPager.default = _ArrowPager;
    });

    it('should have a container', () => {
        expect(component.find('.controls').length).toEqual(1);
    });

    it('should have one right ArrowPager if page is min', () => {
        const altProps = { ...props };
        altProps.page = 0;
        const altComponent = shallow(<CarouselControls {...altProps} />);
        expect(altComponent.find(FakeComponent).length).toEqual(1);
        expect(altComponent.find(FakeComponent).props().isRight).toEqual(true);
    });

    it('should have one left ArrowPager if page is max', () => {
        const altProps = { ...props };
        altProps.page = 3;
        const altComponent = shallow(<CarouselControls {...altProps} />);
        expect(altComponent.find(FakeComponent).length).toEqual(1);
        expect(altComponent.find(FakeComponent).props().isRight).toEqual(false);
    });

    it('should have left and right ArrowPager if page is mid', () => {
        const altProps = { ...props };
        altProps.page = 2;
        const altComponent = shallow(<CarouselControls {...altProps} />);
        const pagers = altComponent.find(FakeComponent);
        expect(pagers.length).toEqual(2);
        // expect(pagers[0].props().isRight).toEqual(true);
        // expect(pagers[1].props().isRight).toEqual(false);
    });

});
