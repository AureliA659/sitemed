import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function VergeturesBlanches() {
  return (
    <TreatmentPageLayout
      title="Vergetures blanches"
      subtitle="Traitement des vergetures"
      description="Les vergetures blanches ou nacrées sont des cicatrices cutanées anciennement établies où les fibres de collagène sont dégradées. Elles nécessitent des traitements plus intensifs par laser fractionné ablatif ou non ablatif afin de stimuler la production de néo-collagène dans les zones atrophiques. Plusieurs séances sont nécessaires pour obtenir une amélioration visible et progressive de la texture."
      backHref="/vergetures"
      backLabel="Retour — Vergetures"
      features={[
        'Laser CO₂ fractionné pour la stimulation profonde',
        'Laser Erbium fractionné pour les peaux sensibles',
        "Amélioration progressive de la texture et de l'aspect nacré",
        'Résultats visibles après 3 à 6 séances',
      ]}
    />
  );
}
