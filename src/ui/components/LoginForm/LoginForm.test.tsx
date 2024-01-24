import { LoginForm } from './LoginForm';
import renderer from 'react-test-renderer';

// SNAPSHOT Test
it('renders correctly', () => {
  const tree = renderer.create(<LoginForm />).toJSON();
  expect(tree).toMatchSnapshot();
});
