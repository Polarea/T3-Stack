import { type AppType } from "next/app";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
      <html lang="en">
        <body>
          <ClerkProvider {...pageProps}>
            <Component {...pageProps} />
          </ClerkProvider>
        </body>
      </html>    
    );
  };

export default api.withTRPC(MyApp);
