import { ThemeProvider, createTheme } from '@mui/material';
import 'public/styles/tailwind.css';
import { Provider } from 'react-redux';
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalModal />
        <NavBar />
        <div className="flex bg-gray-800">
          <div className="p-6 w-full container mx-auto">
            <Component {...pageProps} />
          </div>
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
