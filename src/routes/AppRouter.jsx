import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Step1 from '../pages/checkout/Step1'
import Step2 from '../pages/checkout/Step2'
import Step3 from '../pages/checkout/Step3'

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                {/*Home Page*/}
                <Route path="/" element={<Home />} />
                {/*Cart*/}
                <Route path="/Cart" element={<Cart />} />
                {/*Multi-step form registration */}
                <Route path="/checkout/step-1" element={<Step1 />} />
                <Route path="/checkout/step-2" element={<Step2 />} />
                <Route path="/checkout/step-3" element={<Step3 />} />

                {/*NotFoundPage*/}
                <Route path="*" element={<Navigate to='/' />} />
            </Routes>
        </Router>
    )
}