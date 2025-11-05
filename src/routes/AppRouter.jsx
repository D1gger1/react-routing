import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from '../pages/Home'
import Cart from '../pages/checkout/Cart'
import ContactInformation from '../pages/checkout/ContactInformation'
import ShipmentInformation from '../pages/checkout/ShipmentInformation'
import FinallOrder from '../pages/FinnalOrder'

export default function AppRouter() {
    return (

        <Routes>
            {/*Home Page*/}
            <Route path="/" element={<Home />} />
            {/*Cart*/}
            <Route path="/Cart" element={<Cart />} />
            {/*Multi-step form registration */}
            <Route path="/checkout/ContactInformation" element={<ContactInformation />} />
            <Route path="/checkout/ShipmentInformation" element={<ShipmentInformation />} />
            <Route path="/checkout/FinallOrder" element={<FinallOrder />} />

            {/*NotFoundPage*/}
            <Route path="*" element={<Navigate to='/' />} />
        </Routes>

    )
}