import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function TacheRubisPage() {
  return (
    <TreatmentPageLayout
      title="Tache rubis"
      subtitle="Laser vasculaire"
      description="Les taches rubis, également appelées angiomes séniles ou points rubis, sont de petites taches rouges brillantes de 1 à 5 mm formées par un amas de capillaires superficiels dilatés. Elles sont totalement bénignes mais peuvent être source de gêne esthétique. Le laser les efface en quelques impulsions, de façon définitive et sans aucune cicatrice, avec une tolérance excellente."
      backHref="/laser/laser-vasculaire"
      backLabel="Retour — Laser vasculaire"
      features={[
        'Traitement en une seule séance dans la majorité des cas',
        'Laser Nd:YAG ou KTP selon la taille et la localisation',
        'Disparition complète en 2 à 3 semaines',
        'Aucune éviction sociale — reprise immédiate des activités',
      ]}
    />
  );
}
