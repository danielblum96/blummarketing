import GoogleCegemBeallitasaArticle from '@/app/blog/articles/google-cegem-beallitasa'

export const metadata = {
  title: "Google Cégem beállítása: teljes útmutató vállalkozásoknak",
  description:
    "Mi az a Google Cégem, miért érdemes létrehozni, és hogyan állítsd be teljesen? Lépésről lépésre, gyakorlati tanácsokkal – helyi vállalkozásoknak és szolgáltatóknak.",
  alternates: { canonical: "/tudastar/google-cegem-beallitasa/" },
  openGraph: {
    title: "Google Cégem beállítása: teljes útmutató vállalkozásoknak",
    description:
      "Mi az a Google Cégem, miért érdemes létrehozni, és hogyan állítsd be teljesen? Lépésről lépésre, gyakorlati tanácsokkal.",
    type: "article",
    locale: "hu_HU",
  },
};

export default function TudasTargetGoogleCegemPage() {
  return (
    <GoogleCegemBeallitasaArticle
      backHref="/tudastar/"
      backLabel="Vissza a Tudástárba"
    />
  );
}
