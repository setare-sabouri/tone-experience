import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';
import { StrictMode } from 'react';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Component {...pageProps} />
      </I18nextProvider>
    </StrictMode>
  );
}
