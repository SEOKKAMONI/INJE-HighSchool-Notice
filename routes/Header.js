import "./Header.css"
import { useContext } from 'react';
import { LunchNoticeContext } from '../context/LunchNoticeContext';

import HeaderComponent from "../components/Header/HeaderComponent";
import LunchHeader from "../components/LunchHeader/LunchHeader";

function Header() {
    const { checkLunch } = useContext(LunchNoticeContext);
    if(checkLunch) {
        return (
            <div className="main-header">
                <LunchHeader />
            </div>
        )
    }
    else {
        return (
            <div className="main-header">
                <HeaderComponent />
            </div>
        )
    }
}

export default Header