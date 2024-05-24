import TopBar from "./TopBar";
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Product from "./Product";

function ContentWrapper() {
    return (
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar />
                <ContentRowTop />
                <Product />
            </div>
            <Footer />
        </div>
    );
}

export default ContentWrapper;