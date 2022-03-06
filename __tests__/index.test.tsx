import { render, screen } from '@testing-library/react'
import IndexPage from '../pages/index'

describe('Home', () => {
    it('renders Photo gallery page', () => {
        const { container } = render(<IndexPage photos={null} />)
        expect(container).toMatchSnapshot()
    });
    
})