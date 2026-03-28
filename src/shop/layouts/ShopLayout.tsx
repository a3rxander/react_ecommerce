import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { HeaderShop } from "../components/HeaderShop";

export const ShopLayout = () => {
    return (
        <div>
            <HeaderShop />
            <Outlet />
            <Footer />
        </div>
    );
}
