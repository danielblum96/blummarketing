export const metadata = {
  title: "Átirányítás | Blummarketing",
  robots: { index: false, follow: false },
};

export default function RolunkRedirect() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="0;url=/rolam/" />
        <script dangerouslySetInnerHTML={{ __html: "window.location.replace('/rolam/');" }} />
      </head>
      <body />
    </html>
  );
}
