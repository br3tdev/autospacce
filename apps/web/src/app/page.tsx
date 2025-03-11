"use client";

import { useQuery } from "@apollo/client";
import { CompaniesDocument } from "@autospacce/network/src/gql/generated";
import { Loader2 } from "lucide-react";

export default function Home() {
  const { data, loading } = useQuery(CompaniesDocument);

  return (
    <main className="bg-slate-50 min-h-screen">
      Let&apos;s build the parking app
      {loading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <div>
          {data?.companies.map((company) => (
            <div key={company.id}>{company.displayName}</div>
          ))}
        </div>
      )}
    </main>
  );
}
