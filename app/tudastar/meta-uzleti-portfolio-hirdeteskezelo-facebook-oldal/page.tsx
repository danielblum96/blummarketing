import MetaPortfolioArticle from '@/app/blog/articles/meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal'

export const metadata = {
  title: "Meta üzleti portfólió, Hirdetéskezelő és Facebook-oldal: mi micsoda?",
  description: "Megmutatjuk mi a különbség az üzleti portfólió, hirdetési fiók és Facebook-oldal között – és miért kritikus ez a PPC-kampányaidhoz.",
  alternates: {
    canonical: "/blog/meta-uzleti-portfolio-hirdeteskezelo-facebook-oldal/",
  },
};

export default function TudasTargetMetaPage() {
  return (
    <MetaPortfolioArticle
      backHref="/tudastar/meta-hirdetesek/"
      backLabel="Vissza: Meta hirdetések"
    />
  );
}
