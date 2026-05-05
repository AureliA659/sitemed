import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function RosaceePage() {
  return (
    <TreatmentPageLayout
      title="Rosacée"
      subtitle="Laser vasculaire"
      description="La rosacée est une affection cutanée chronique caractérisée par des rougeurs persistantes, des télangiectasies, des papules et parfois des pustules au niveau du visage. Le traitement laser vasculaire permet de détruire les vaisseaux dilatés et de réduire durablement les rougeurs et les bouffées vasomotrices, en complément d'une prise en charge médicale adaptée selon le stade de la maladie."
      backHref="/laser/laser-vasculaire"
      backLabel="Retour — Laser vasculaire"
      features={[
        'Laser vasculaire ciblant les télangiectasies et rougeurs diffuses',
        'Réduction des flush et bouffées vasomotrices',
        'Protocole de 3 à 5 séances selon le stade',
        'Traitement de maintien recommandé selon évolution',
      ]}
    />
  );
}
