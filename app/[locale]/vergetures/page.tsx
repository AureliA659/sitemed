import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function VergeturesPage() {
  return (
    <TreatmentPageLayout
      title="Vergetures"
      subtitle="Traitement des vergetures"
      description="Les vergetures sont des cicatrices dermiques linéaires résultant d'une distension cutanée rapide (grossesse, croissance, variations de poids). Leur coloration et leur ancienneté déterminent le traitement le plus adapté. Notre équipe médicale propose des protocoles sur mesure combinant lasers vasculaires et fractionnés pour améliorer significativement leur aspect, qu'elles soient récentes ou anciennes."
      backHref="/"
      backLabel="Accueil"
      subPages={[
        {
          title: 'Vergetures rouges',
          href: '/vergetures/vergetures-rouges',
          description: 'Vergetures récentes de couleur rosée à violacée, particulièrement réactives aux traitements laser vasculaire et fractionné.',
        },
        {
          title: 'Vergetures blanches',
          href: '/vergetures/vergetures-blanches',
          description: 'Vergetures anciennes nacrées ou blanches, traitées par laser fractionné ablatif pour stimuler la régénération cutanée.',
        },
      ]}
    />
  );
}
