import { GlobalStyle } from './styles';
import { QueryProvider, AppThemeProvider, AppRouterProvider } from "./providers";

function App() {
    return (
        <AppThemeProvider>
            <QueryProvider>
                <GlobalStyle />
                <AppRouterProvider />
            </QueryProvider>
        </AppThemeProvider>
    );
}

export default App;