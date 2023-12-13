import Header from './Header'
import Footer from './Footer'
import { AppRoutes } from '../routes'

type MainLayoutProps = {
    children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <>
            <Header />
            <section style={{ minHeight: "550px", padding: "30px" }}>
                {children}
            </section>
            <Footer />
        </>
    )
}

export default MainLayout;