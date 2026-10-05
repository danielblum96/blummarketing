"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function TudasTarLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("tb") === "1") {
      setOk(true);
    } else {
      router.replace("/tudastar-belepes/");
    }
  }, [router]);

  if (!ok) return null;
  return <>{children}</>;
}
