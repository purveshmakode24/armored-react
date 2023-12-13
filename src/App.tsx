import 'bootstrap/dist/css/bootstrap.css'; // bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js' // bootstrap js
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // theme
import 'primereact/resources/primereact.min.css'; // core css
import 'primeicons/primeicons.css'; // icons
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

function App() {
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
    <div className="App container-fluid" style={{ textAlign: 'center' }}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  )
}

export default App;
