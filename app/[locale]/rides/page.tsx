import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function RidesPage() {
  return (
    <TreatmentPageLayout
      title="Rides"
      subtitle="Traitements anti-âge"
      description="Les rides sont le signe naturel du vieillissement cutané. Elles résultent de la perte progressive de collagène, d'élasticité et du relâchement musculaire. Notre équipe médicale propose une approche globale et personnalisée pour corriger aussi bien les rides statiques que les rides d'expression, en alliant injections, traitements régénérateurs et soins de rajeunissement adaptés à chaque patient."
      backHref="/"
      backLabel="Accueil"
      subPages={[
        {
          title: 'Rides statiques',
          href: '/rides/rides-statiques',
          description: 'Rides permanentes visibles au repos, traitées par injections de combleurs dermiques et stimulateurs de collagène.',
        },
        {
          title: "Rides d'expression",
          href: '/rides/rides-expression',
          description: 'Rides formées par les contractions musculaires répétées, traitées par toxine botulique pour un résultat naturel.',
        },
      ]}
    />
  );
}
