import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function CouperoserPage() {
  return (
    <TreatmentPageLayout
      title="Couperose"
      subtitle="Laser vasculaire"
      description="La couperose se caractérise par des petits vaisseaux sanguins dilatés visibles (télangiectasies) principalement sur le nez et les joues. Ces vaisseaux ne se rétractent plus naturellement et créent des rougeurs persistantes inesthétiques. Le laser vasculaire ferme ces capillaires pathologiques en un minimum de séances, pour effacer ces rougeurs de façon durable et sans aucune cicatrice."
      backHref="/laser/laser-vasculaire"
      backLabel="Retour — Laser vasculaire"
      features={[
        "Traitement en 1 à 3 séances selon l'étendue",
        'Efficacité sur télangiectasies isolées et rougeurs diffuses',
        'Laser KTP 532 nm ou Nd:YAG 1064 nm',
        'Résultat visible dans les premiers jours post-traitement',
      ]}
    />
  );
}
