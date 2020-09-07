import React from 'react'
import Component from './modal'
import { shallow } from 'enzyme'

describe('>>> Modal Component', () => {
  const props = {
    dismissText: 'dismissText',
    primaryText: 'primaryText',
    type: '',
    title: 'title'
  }
  const body = jest.fn()
  const primaryAction = jest.fn()
  const dismissAction = jest.fn()

  beforeEach(() => {
    props.body = body
    props.dismissAction = dismissAction
    props.primaryAction = primaryAction
  })

  it('should render a div.modal and the title', () => {
    const wrapper = shallow(<Component {...props} />)
    expect(wrapper.find('.modal').length).toEqual(1)
    expect(wrapper.find('.modal-title').text()).toEqual(props.title)
    expect(wrapper.find('.modal-footer > button').last().text()).toEqual(props.dismissText)
  })

  describe('>> body', () => {
    it('should render a body if have some', () => {
      shallow(<Component {...props} />)

      expect(body).toBeCalled()
    })

    it('should NOT render a body if wasn\'t provided', () => {
      props.body = undefined
      shallow(<Component {...props} />)

      expect(body).not.toBeCalled()
    })
  })

  describe('>> primaryAction', () => {
    it('should render a primaryAction button if one was provided', () => {
      const wrapper = shallow(<Component {...props} />)

      expect(wrapper.find('.modal-footer > button').length).toEqual(2)
      expect(wrapper.find('.modal-footer > button').first().text()).toEqual(props.primaryText)
    })

    it('should NOT render a primaryAction button if none was provided', () => {
      props.primaryAction = undefined
      const wrapper = shallow(<Component {...props} />)

      expect(wrapper.find('.modal-footer > button').length).toEqual(1)
    })

    it('should render danger button if type is "danger"', () => {
      props.type = 'danger'
      const wrapper = shallow(<Component {...props} />)

      expect(wrapper.find('.modal-footer > button.btn-danger').first().text()).toEqual(props.primaryText)
    })

    it('should render warning button if type is "warning"', () => {
      props.type = 'warning'
      const wrapper = shallow(<Component {...props} />)

      expect(wrapper.find('.modal-footer > button.btn-warning').first().text()).toEqual(props.primaryText)
    })

    it('should render success button if type is "success"', () => {
      props.type = 'success'
      const wrapper = shallow(<Component {...props} />)

      expect(wrapper.find('.modal-footer > button.btn-success').first().text()).toEqual(props.primaryText)
    })

    it('should render primary button if type is anything else', () => {
      props.type = '???'
      const wrapper = shallow(<Component {...props} />)

      expect(wrapper.find('.modal-footer > button.btn-primary').first().text()).toEqual(props.primaryText)
    })
  })
})