import {describe, it, expect, beforeEach, vi} from 'vitest';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import {Router} from './src/components/Router';
import { Component, lazy } from 'react';
import {getCurrentPath} from './src/utils/utils';
import { Link } from './src/components/Link';
import {Route} from './src/components/Route'
const LazyAboutPage = lazy(() => import('./src/pages/About'));

vi.mock('./src/utils/utils.ts', () => ({
    getCurrentPath: vi.fn()
}))


describe('Router', () => {
    beforeEach(() => {
        cleanup();
        vi.clearAllMocks();
    })

    it('should render without problems', () => {
        render(<Router routes={[]} />);
        expect(true).toBeTruthy();
    })

    it('Should render 404 if no routes matched', () => {
        render(<Router routes={[]}/>)
        expect(screen.getByText('Recurso no encontrado')).toBeTruthy();
    })

    it('Should render the component of the first route that matches', () => {
        getCurrentPath.mockReturnValue('/about');
        const routes = [
            {
                path: '/',
                Component: () =>  <h1>Home</h1>
            },
            {
                path: '/about',
                Component: ()=> <h1>About</h1>
            }
        ]
        render(<Router routes={routes}/>)
        expect(screen.getByText('About')).toBeTruthy();
    })

    it('Should navigate using Links',async () => {
        getCurrentPath.mockReturnValueOnce('/')
        const routes = [
            {
                path: '/',
                Component: () =>  
                        <>
                            <h1>Home</h1>
                            <Link to='/about' text='About' />
                        </>
                    
            },
            {
                path: '/about',
                Component: ()=> <h1>About</h1>
            }
        ]
        render(
            <Router routes={routes}>
                <Route path='/'/>
                <Route path='/about'/>
            </Router>
        )

        const button = screen.getByText(/About/);
        fireEvent.click(button);

        const AboutTitle = await screen.findByText('About');
        expect(AboutTitle).toBeTruthy();
    })
})