import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
})

afterEach(() => {
  wrapped.unmount();
});

it('has a title, textarea and a button', () => {
  const title = wrapped.find('h4');
  const textarea = wrapped.find('textarea');
  const button = wrapped.find('button');

  expect(title.length).toEqual(1);
  expect(textarea.length).toEqual(1);
  expect(button.length).toEqual(1);
});

it('has a textarea that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted, textarea gets emptied', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' }
  });

  wrapped.update();
  wrapped.find('form').simulate('submit');
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('');
});