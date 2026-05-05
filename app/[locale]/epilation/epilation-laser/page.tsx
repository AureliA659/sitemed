import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function EpilationLaserPage() {
  return (
    <TreatmentPageLayout
      title="Épilation laser"
      subtitle="Épilation définitive"
      description="L'épilation laser est la méthode de référence pour une réduction permanente et efficace du système pileux. La lumière laser est absorbée par la mélanine du poil, détruisant sélectivement le follicule pileux sans endommager la peau environnante. Nos lasers Alexandrite et Nd:YAG couvrent tous les phototypes cutanés, du plus clair au plus foncé, pour traiter toutes les zones du corps avec confort et rapidité."
      backHref="/epilation"
      backLabel="Retour — Épilation"
      features={[
        'Laser Alexandrite 755 nm (peaux claires à mates)',
        'Laser Nd:YAG 1064 nm (peaux mates à foncées)',
        'Traitement de toutes les zones corporelles',
        '6 à 8 séances pour 70 à 90 % de réduction définitive',
      ]}
    />
  );
}
