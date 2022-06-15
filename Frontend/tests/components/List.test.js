import {shallow} from "enzyme";
import List from "../../src/components/List";
import tasks from "src/tasks";
import Item from "../../src/components/List/Item";

describe('<List />', () => {
  test('should have a list if we give tasks', () => {
    const wrapper = shallow(<List tasks={tasks} />);
    const list = wrapper.find('.content-list');
    expect(list).toHaveLength(1);
  });

  test('should not have a list if we give no tasks', () => {
    const wrapper = shallow(<List tasks={[]} />);
    const list = wrapper.find('.content-list');
    expect(list).toHaveLength(0);
  });

  test('should have as many Item as tasks', () => {
    const wrapper = shallow(<List tasks={tasks} />);
    const item = wrapper.find(Item);
    expect(item).toHaveLength(tasks.length);
  });
})
