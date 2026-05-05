import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function LaserPigmentairePage() {
  return (
    <TreatmentPageLayout
      title="Laser pigmentaire"
      subtitle="Traitements laser"
      description="Le laser pigmentaire traite efficacement les taches brunes d'origine solaire, les lentigos, le mélasma et les taches post-inflammatoires. Nos lasers Q-Switched Nd:YAG et Picoseconde émettent des impulsions ultra-courtes qui brisent sélectivement les amas de mélanine en micro-particules éliminées naturellement par l'organisme, sans endommager la peau environnante."
      backHref="/laser"
      backLabel="Retour — Laser"
      features={[
        'Laser Q-Switched Nd:YAG (1064 nm / 532 nm)',
        'Laser Picoseconde pour les peaux plus sensibles',
        'Taches solaires, lentigos, mélasma, taches post-inflammatoires',
        'Résultats visibles dès 1 à 3 séances selon le type de tache',
      ]}
    />
  );
}
