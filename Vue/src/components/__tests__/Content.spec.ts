import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../HomeContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content, { props: { text: 'count' } });
    expect(wrapper.text()).toContain('count');
  });
});
