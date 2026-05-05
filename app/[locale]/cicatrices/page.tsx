import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function CicatricesPage() {
  return (
    <TreatmentPageLayout
      title="Cicatrices"
      subtitle="Traitement des cicatrices"
      description="Le traitement médical des cicatrices par laser permet d'améliorer significativement leur texture, leur couleur et leur relief. Qu'il s'agisse de cicatrices d'acné atrophiques, de cicatrices hypertrophiques post-chirurgicales ou de cicatrices traumatiques, nos médecins élaborent un protocole personnalisé adapté au type, à l'ancienneté et à la localisation de chaque cicatrice pour des résultats optimaux."
      backHref="/"
      backLabel="Accueil"
      features={[
        "Cicatrices d'acné atrophiques (boxcar, rolling, icepick)",
        'Cicatrices hypertrophiques et chéloïdes',
        'Cicatrices chirurgicales et traumatiques',
        'Laser fractionné ablatif CO₂ ou non ablatif',
      ]}
    />
  );
}
