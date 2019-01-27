import React from 'react';
import { mount } from 'enzyme';
import CommentList from '../CommentList';
import Root from '../../Root';

let wrapped;

beforeEach(() => {
  const initialState = {
    comments: ['122', 'second'],
  };
  
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
})

it('creates one LI per comment', () => {
  expect(wrapped.find('li').length).toEqual(2);
});

it('shows text in each comment', () => {
  expect(wrapped.render().text()).toContain('122');
  expect(wrapped.render().text()).toContain('second');
});