import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import Header from './Header'
import Footer from './Footer'
import { AppRoutes } from '../routes'
import { Suspense } from 'react'

const MainLayout = () => {
    const ErrorFallback = ({ error, resetErrorBoundary }: any) => {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre>{error.message}</pre>
                <button onClick={resetErrorBoundary}>Try again</button>
            </div>
        )
    }

    return (
        <>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <BrowserRouter>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Header />
                        <section style={{ minHeight: "600px", padding: "30px" }}>
                            <AppRoutes />
                        </section>
                        <Footer />
                    </Suspense>
                </BrowserRouter>
            </ErrorBoundary>
        </>
    )
}

export default MainLayout;