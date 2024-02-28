import CartManagement from "./cartManagement/CartManagement";
import Products from "./products/Products";

const App = () => {
    return (
        <div className="lg:flex">
            <CartManagement />
            <Products />
        </div>
    );
};

export default App;
