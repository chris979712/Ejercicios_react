import './App.css'
import { lazy } from 'react';
import { Router } from './components/Router';
import { Route } from './components/Route';
import { Suspense } from 'react';
const LazyHomePage = lazy(() => import('./pages/Home.tsx'));
const LazyAboutPage = lazy(() => import('./pages/About.tsx'));

function App() {

  return (
    <>
      <main>
        <Suspense fallback={<div>Cargando...</div>}>
            <Router routes={[{path: "/", Component: LazyHomePage}]}>
              <Route path='/' Component={LazyHomePage}></Route>
              <Route path='/about' Component={LazyAboutPage}></Route>
            </Router>
        </Suspense>
      </main>
    </>
  )
}

export default App
