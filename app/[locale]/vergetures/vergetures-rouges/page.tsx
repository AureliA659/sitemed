import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function VergeturesRougesPage() {
  return (
    <TreatmentPageLayout
      title="Vergetures rouges"
      subtitle="Traitement des vergetures"
      description="Les vergetures récentes, de couleur rose à violacée, sont le signe d'une destruction active des fibres élastiques dermiques. À ce stade, elles répondent particulièrement bien aux traitements par laser vasculaire et par fractionnement cutané. Une prise en charge précoce permet une disparition significative et de meilleurs résultats à long terme qu'avec des vergetures établies."
      backHref="/vergetures"
      backLabel="Retour — Vergetures"
      features={[
        'Laser vasculaire pour effacer la coloration rosée',
        'Laser fractionné pour stimuler la régénération dermique',
        'Séances espacées de 4 à 6 semaines',
        'Meilleure efficacité que pour les vergetures blanches',
      ]}
    />
  );
}
