import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function RelachementCutanePage() {
  return (
    <TreatmentPageLayout
      title="Relâchement cutané"
      subtitle="Raffermissement cutané"
      description="Le relâchement cutané est lié à la diminution progressive du collagène et de l'élastine qui survient avec l'âge, accentuée par les variations de poids et les facteurs environnementaux. Nos traitements non chirurgicaux permettent de raffermir efficacement la peau du visage et du corps grâce à la radiofréquence, aux ultrasons focalisés et au laser de remodelage dermique, pour retrouver un galbe et une tonicité naturels sans chirurgie."
      backHref="/"
      backLabel="Accueil"
      features={[
        'Radiofréquence micro-needling (Morpheus8®)',
        'Ultrasons focalisés haute intensité (HIFU)',
        'Laser de remodelage dermique fractionné',
        'Résultats progressifs et naturels sur 3 à 6 mois',
      ]}
    />
  );
}
