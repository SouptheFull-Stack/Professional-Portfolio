import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';

export default function App() {
    return (
        <>
            {/* <Nav /> */}
            <main className="bodyBack">
                <Outlet />
            </main>
        </>
    );
}