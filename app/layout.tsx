import '@styles/globals.css'
import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Promptify',
    description: 'AI powered tool to share,discover and create new prompts'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                <Navbar />
                {children}    
            </main>
        </body>
      </html>
    );
  }