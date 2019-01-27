import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
})

afterEach(() => {
  wrapped.unmount();
});

it('has a title, textarea and a two buttons', () => {
  const title = wrapped.find('h4');
  const textarea = wrapped.find('textarea');
  const button = wrapped.find('button');

  expect(title.length).toEqual(1);
  expect(textarea.length).toEqual(1);
  expect(button.length).toEqual(2);
});

describe('the textarea', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: 'new comment' }
    });
  
    wrapped.update();
  })

  it('has a textarea that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('when form is submitted, textarea gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
  
    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});