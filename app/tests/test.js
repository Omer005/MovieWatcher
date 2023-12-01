import React from 'react';
import renderer from 'react-test-renderer'; // Import 'renderer' instead of 'react-test-renderer'
import CustomButton from '../components/CustomButton';
import CustomTextInput from '../components/input';
import MyCustomButton from '../components/CustomButton';

    describe('CustomButton', () => {
        it('renders correctly', () => {
            const tree = renderer.create( // Use 'renderer.create' instead of 'render'
                <CustomButton
                    text="Donate Now"
                    onPress={() => { }}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });


    describe('CustomTextInput', () => {
        it('renders correctly', () => {
            const tree = renderer.create( // Use 'renderer.create' instead of 'render'
                <CustomTextInput
                    placeholder="Search"
                    title="Enter Email"
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });


    describe('MyCustomButton', () => {
        it('renders correctly', () => {
            const tree = renderer.create( // Use 'renderer.create' instead of 'render'
                <MyCustomButton
                    text="Donate Now"
                    onPress={() => { }}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });



