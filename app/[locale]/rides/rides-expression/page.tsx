import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function RidesExpressionPage() {
  return (
    <TreatmentPageLayout
      title="Rides d'expression"
      subtitle="Traitement anti-âge"
      description="Les rides d'expression se forment par la répétition des contractions musculaires du visage : rides du front, rides du lion entre les sourcils, pattes d'oie au coin des yeux. Elles sont traitées avec précision par injection de neuromodulateurs (toxine botulique) pour détendre sélectivement les muscles responsables, obtenant un résultat naturel, éclairci et harmonieux sans masquer les expressions du visage."
      backHref="/rides"
      backLabel="Retour — Rides"
      features={[
        'Toxine botulique (Botox®, Bocouture®, Dysport®)',
        'Résultats visibles en 5 à 10 jours',
        "Durée d'action : 4 à 6 mois selon les patients",
        'Aucune éviction sociale — retour immédiat aux activités',
      ]}
    />
  );
}
