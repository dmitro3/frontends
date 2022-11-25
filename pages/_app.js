import { ThemeProvider, createTheme } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import 'public/styles/tailwind.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalModal from 'src/components/GlobalModal';
import NavBar from 'src/components/NavBar';
import store from 'src/store';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalModal />
          <NavBar />
          <div className="flex bg-gray-800 min-h-screen">
            <div className="p-6 w-full container mx-auto">
              <Component {...pageProps} />
            </div>
          </div>
        </ThemeProvider>
      </Provider>
    </StyledEngineProvider>
  );
}

export default MyApp;
