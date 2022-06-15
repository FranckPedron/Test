import { shallow} from "enzyme";
import List from "../../src/components/List";
import App from "../../src/components/App";

describe('<App />', () => {
  test('should have a list if we give tasks', () => {
    const wrapper = shallow(<App/>);
    const list = wrapper.find('.content-list');
    expect(list).toHaveLength(1);
  });

});
