import { shallow } from 'enzyme';

import IndexPage from '../index';
import { PageHeader, PopupDialog, List } from "../../components/index";

describe("Index page", () => {

    it('Should show Page header component', () => {
        const wrapped = shallow(<IndexPage photos={null} />)
        expect(wrapped.find(PageHeader).length).toEqual(1);
    });

    it('Should show List of photos component', () => {
        const wrapped = shallow(<IndexPage photos={null} />)
        expect(wrapped.find(List).length).toEqual(1);
    })

    it('Should show Popup Modal component', () => {
        const wrapped = shallow(<IndexPage photos={null} />)
        expect(wrapped.find(PopupDialog).length).toEqual(0);
    });
})