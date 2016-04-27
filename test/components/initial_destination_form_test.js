import { renderComponent, expect } from '../test_helper';
import InitialForm from '../../src/components/initial_form';

describe('Initial Destination Form', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(InitialForm);
  });

  it('shows the initial form', () => {
    expect(component).to.have.class('initial-form');
  });

  it('has the submit button', () => {
    expect(component.find('button').to.exist);
  });
});
