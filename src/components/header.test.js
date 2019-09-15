import React from 'React'
import { shallow } from 'enzyme'
import Header from './Header.js'
import { findByTestAttribute } from './../../Utilities'

const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>)
    return component 
}

describe('Header Component', () => {
    let component

    beforeEach(()=> {
        component = setUp()
    })

    it('should render without errors', () => {
        const wrapper = findByTestAttribute(component, 'header')
        expect(wrapper.length).toBe(1)
    })

    it('should render title', () => {
        const wrapper = findByTestAttribute(component, 'title')
        expect(wrapper.length).toBe(1)
    })

})  
