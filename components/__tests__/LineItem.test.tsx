import { shallow } from 'enzyme';
import sinon from 'sinon';

import { render, screen } from '@testing-library/react';
import { IPhoto } from '../../interfaces/photo.interface';
import LineItem from "../LineItem/LineItem";

describe('Line item Component', () => {
    let clickedItem: IPhoto = null;
    const item: IPhoto = {
        "id": 2014422,
        "width": 3024,
        "height": 3024,
        "url": "https://www.pexels.com/photo/brown-rocks-during-golden-hour-2014422/",
        "photographer": "Joey Farina",
        "photographer_url": "https://www.pexels.com/@joey",
        "photographer_id": 680589,
        "avg_color": "#978E82",
        "src": {
            "original": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg",
            "large2x": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            "large": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "medium": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=350",
            "small": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&h=130",
            "portrait": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
            "landscape": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
            "tiny": "https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280"
        },
        "liked": false,
        "alt": "Brown Rocks During Golden Hour"
    };

    const getClickedItem = (item: IPhoto) => {
        clickedItem = item;
    }

    it('Should render a snapshot of the line item component', () => {
        const { container } = render(<LineItem item={item} onClickItem={null} />);
        expect(container).toMatchSnapshot();
    });

    it('Should render a title with correct title', () => {
        const wrapped = shallow(<LineItem item={item} onClickItem={null} />);
        expect(wrapped.find('.title').text()).toEqual(item.photographer)
    });

    it('Should test the click on photo item', () => {
        const onClickItem = sinon.spy();
        const wrapper = shallow(<LineItem item={item} onClickItem={() => onClickItem(item)} />);
        wrapper.find('button').simulate('click');
        expect(onClickItem).toHaveProperty('callCount', 1);
    });

    it('Should get the clicked item', () => {
        const wrapped = shallow(<LineItem item={item} onClickItem={() => getClickedItem(item)} />);
        const button = wrapped.find('button').simulate('click');
        expect(clickedItem.id).toEqual(2014422);
        expect(clickedItem.alt).toBe('Brown Rocks During Golden Hour');
    });

})