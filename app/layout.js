import Header from "@/components/Header";
import { Providers } from "./providers";
import { Stack } from "@chakra-ui/react";
import Footer from "@/components/Footer";
import NextAuthSessionProvider from "./providers/sessionProvider";


export const metadata = {
  title: 'Aanisa Diagnostics',
  description: 'One stop diagnostics solutions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthSessionProvider>
        <Providers>
          <Stack minH="100vh" bg="white" spacing={0} position="relative">
            <Header />
            <Stack flex={1} mt={4}>
              {children}
            </Stack>
            <Footer/>
          </Stack>
        </Providers>
        </NextAuthSessionProvider>
      </body>
    </html>
  )
}
