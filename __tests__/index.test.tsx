import { shallow } from 'enzyme';
import IndexPage from '../pages/index';
import { PageHeader, PopupDialog, List } from "../components/index";
import { render } from '@testing-library/react';

describe("Index page", () => {

    it('Should render a snapshot of the line item component', () => {
        const { container } = render(<IndexPage photos={null} />);
        expect(container).toMatchSnapshot();
    });

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