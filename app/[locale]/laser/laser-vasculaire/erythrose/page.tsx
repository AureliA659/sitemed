import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function ErythrosePage() {
  return (
    <TreatmentPageLayout
      title="Érythrose"
      subtitle="Laser vasculaire"
      description="L'érythrose faciale se manifeste par des rougeurs diffuses et permanentes du visage, particulièrement marquées sur les joues et le nez. Elle est liée à une dilatation chronique des capillaires dermiques superficiels. Le laser vasculaire Nd:YAG ou KTP coagule sélectivement ces micro-vaisseaux, réduisant durablement les rougeurs tout en respectant parfaitement les tissus environnants."
      backHref="/laser/laser-vasculaire"
      backLabel="Retour — Laser vasculaire"
      features={[
        'Laser Nd:YAG 1064 nm ou KTP 532 nm selon la profondeur',
        '2 à 4 séances selon étendue et intensité des rougeurs',
        'Traitement bien toléré avec une légère rougeur transitoire',
        'Résultats durables en complément de soins adaptés quotidiens',
      ]}
    />
  );
}
