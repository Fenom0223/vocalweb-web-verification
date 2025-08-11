import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
  title: 'Vocalweb Solutions | AI-Powered Automation',
  description: 'Transform customer interactions and internal management with cutting-edge AI Voice Agents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakartaSans.variable} font-body antialiased bg-background text-foreground/90 relative`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-background" />
            <div
              className="absolute inset-0 animate-background-pan"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, hsl(var(--primary) / 0.15), transparent 40%), 
                              radial-gradient(circle at 80% 70%, hsl(var(--primary) / 0.15), transparent 40%)`,
                backgroundRepeat: 'no-repeat',
              }}
            />
          </div>
          <div className="relative z-10 flex flex-col min-h-screen">
              <LanguageProvider>
                <Header />
                <main className="flex-grow">{children}</main>
                <Footer />
                <Toaster />
              </LanguageProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
