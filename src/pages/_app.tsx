import { GeistSans } from "geist/font/sans";
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
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <div className={GeistSans.className}>
      <Component {...pageProps} />
    </div>
        </body>
      </html>
    </ClerkProvider>    
  );
};

export default api.withTRPC(MyApp);
