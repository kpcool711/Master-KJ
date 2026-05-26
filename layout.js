export const metadata = {
  title: 'Master KJ',
  description: 'AI Assistant'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
