import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function AngiomePage() {
  return (
    <TreatmentPageLayout
      title="Angiome"
      subtitle="Laser vasculaire"
      description="Les angiomes cutanés sont des malformations vasculaires bénignes qui peuvent apparaître à tout âge sous différentes formes : angiomes plans, angiomes stellaires (en araignée), hémangiomes capillaires. Le laser vasculaire est le traitement de référence : la lumière est absorbée par l'oxyhémoglobine, coagulant sélectivement les vaisseaux pathologiques sans cicatrice et sans endommager la peau environnante."
      backHref="/laser/laser-vasculaire"
      backLabel="Retour — Laser vasculaire"
      features={[
        'Angiomes plans, stellaires, hémangiomes capillaires',
        'Laser colorant pulsé (PDL) ou Nd:YAG selon le type',
        '1 à 3 séances selon la taille et la profondeur de la lésion',
        'Traitement bien toléré, sans cicatrice résiduelle',
      ]}
    />
  );
}
