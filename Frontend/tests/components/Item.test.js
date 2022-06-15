import Item from 'src/components/List/Item';
import { shallow } from 'enzyme';


describe('<Item />', () => {
  test('should display a title', () => {
    const wrapper = shallow(<Item />);
    const title = wrapper.find('.content-text');
    expect(title).toHaveLength(1);
  })

});
