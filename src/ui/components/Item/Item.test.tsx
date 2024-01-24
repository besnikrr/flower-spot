/* eslint-disable testing-library/no-node-access */
import { render } from '@testing-library/react';
import { Item } from './Item';

// UNIT Test
test('Item should have all elements', async () => {
  const item = {
    id: 7,
    name: 'Alpski volcin',
    latin_name: 'Daphne alpina',
    sightings: 17,
    profile_picture:
      '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/007/medium/L_00010.jpg?1527514226',
    favorite: false,
  };

  render(<Item flower={item} isLoggedIn={true} />);

  const title = document.getElementById('title');
  const paragraph = document.getElementById('title');
  const button = document.getElementById('title');
  const icon = document.getElementById('star');

  expect(title).toBeTruthy();
  expect(paragraph).toBeTruthy();
  expect(button).toBeTruthy();
  expect(icon).toBeTruthy();
});

test('Item should have all elements expect the star icon', async () => {
  const item = {
    id: 7,
    name: 'Alpski volcin',
    latin_name: 'Daphne alpina',
    sightings: 17,
    profile_picture:
      '//flowrspot.s3.amazonaws.com/flowers/profile_pictures/000/000/007/medium/L_00010.jpg?1527514226',
    favorite: false,
  };

  render(<Item flower={item} isLoggedIn={false} />);

  const title = document.getElementById('title');
  const paragraph = document.getElementById('title');
  const button = document.getElementById('title');
  const icon = document.getElementById('star');

  expect(title).toBeTruthy();
  expect(paragraph).toBeTruthy();
  expect(button).toBeTruthy();
  expect(icon).toBeFalsy();
});
