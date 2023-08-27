// import store from '@/Redux/store';
import { AppProvider } from '@/Components/AppContext';
import Sidebar from '@/Components/SideBar';
import store, { persistor } from '@/Redux/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <Sidebar />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </AppProvider>
  );
}
