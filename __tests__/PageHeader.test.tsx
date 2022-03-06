import { render, screen } from '@testing-library/react';
import PageHeader from "../components/PageHeader/PageHeader";

describe('Page Header Component', () => {
    const data = {
        title: "Page title",
        description: "This is a page description"
    };
    it('Should render a snapshot of the page header component', () => {
        const { container } = render(<PageHeader title='Page title' description='This is a page description' />);
        expect(container).toMatchSnapshot();

    });

    it('Should render the title correctly', () => {
        const { container } = render(<PageHeader title='Page title' description='This is a page description' />);
        expect(container.querySelector('.title').innerHTML).toBe("Page title");
    });

    it('Should render the description correctly', () => {
        const { container } = render(<PageHeader title={data.title} description={data.description} />);
        expect(container.querySelector('.description').innerHTML).toBe("This is a page description");
    });
})