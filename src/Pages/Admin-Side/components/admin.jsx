import Navbar from "./Navbar";
import Pl from "./pl";
import Dl from "./dl";
import Logout from "./Logout";
import Dashboard from "./dbb";
import Footer from "./Footer";
function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  return (
    <>
      <Navbar currentPage={currentPage} onNavClick={setCurrentPage} />

      <div className="main-content" style={{ paddingBottom: "3rem" }}>
        {currentPage === "pl" && <Pl />}
        {currentPage === "dl" && <Dl />}
        {currentPage === "Logout" && <Logout />}
        {currentPage === "dashboard" && <Dashboard />}
      </div>

      <Footer />
    </>
  );
}

export default App;
