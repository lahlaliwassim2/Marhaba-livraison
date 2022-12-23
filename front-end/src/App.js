import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Store from "./components/store/Store";
import About from "./components/about/About";
import ShoppingCarteProvider from "./context/ShoppingCarteContext";
import Login from "./components/forms/login";
import Register from "./components/forms/register";
import Dashboard from "./components/admin/dashboard/dashboard";
import ShowLivreur from "./components/admin/livreur/ShowLivreur";
import ShowOrders from "./components/admin/orders/ShowOrders";
import ShowProduct from "./components/admin/produit/ShowProduct";
import ShowCategorie from "./components/admin/categorie/ShowCategorie";
import ShowClients from "./components/admin/clients/ShowClients";
import Statistique from "./components/admin/statistique/Statistique";
import Navbar from "./components/navbar/Navbar";
import LivreurDash from "./components/livreur/dashboard.jsx";
import PrivateRoutes from "./components/PrivateRoute/PrivateRoutes";
import Error from "./components/PrivateRoute/Error";
import PrivateRole from "./components/PrivateRoute/PrivateRole";

function App() {
  return (
    <ShoppingCarteProvider>
      <Navbar />
      <div className="mb-4">
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />

          {/* Private Routes */}

          <Route element={<PrivateRoutes />}>
            {/* Private Route role Client */}
            <Route element={<PrivateRole role="client" />}>
              <Route path="/store" element={<Store />} />
            </Route>

            {/* Private Route Role Livreur */}
            <Route element={<PrivateRole role="livreur" />}>
              <Route path="/livreur/dashboard" element={<LivreurDash />} />
            </Route>

            {/* Private Route Role Admin */}
            <Route element={<PrivateRole role="manager" />}>
              <Route path="/dashboard" element={<Dashboard />}>
                <Route path="/dashboard/livreurs" element={<ShowLivreur />} />
                <Route path="/dashboard/orders" element={<ShowOrders />} />
                <Route path="/dashboard/products" element={<ShowProduct />} />
                <Route
                  path="/dashboard/categories"
                  element={<ShowCategorie />}
                />
                <Route path="/dashboard/clients" element={<ShowClients />} />
                <Route path="/dashboard/statistic" element={<Statistique />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </ShoppingCarteProvider>
  );
}

export default App;
