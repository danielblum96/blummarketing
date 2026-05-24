import GoogleAIKorszakArticle from '@/app/blog/articles/google-search-ai-korszak-online-marketing'

export const metadata = {
  title: "A Google Search AI-korszaka elkezdődött – és ez mindent átír az online marketingben | Blummarketing",
  description: "A Google keresője döntési motorrá válik. Mi változik SEO-ban, Google Ads-ben és tartalomstratégiában – és mit kell most tenned vállalkozóként.",
  alternates: {
    canonical: "/tudastar/google-search-ai-korszak-online-marketing/",
  },
};

export default function TudasTargetGoogleAIPage() {
  return (
    <GoogleAIKorszakArticle
      backHref="/tudastar/"
      backLabel="Vissza a Tudástárba"
    />
  );
}
