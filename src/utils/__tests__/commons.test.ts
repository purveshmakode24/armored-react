import React from 'react';
import { render, screen } from '@testing-library/react';
import { add } from '../commons';

test('test add function', () => {
    expect(add(1, 3)).toEqual(4);
});
