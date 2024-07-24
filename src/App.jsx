import { Outlet } from 'react-router-dom';
// import Nav from './components/NavTabs';

export default function App() {
    return (
        <>
            <NavTabs /> 
            <main className="bodyBack">
                <Outlet />
            </main>
        </>
    );
}