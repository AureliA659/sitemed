import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function LaserPage() {
  return (
    <TreatmentPageLayout
      title="Laser"
      subtitle="Traitements laser"
      description="Nos traitements laser couvrent un large spectre d'indications dermatologiques et esthétiques. Grâce à nos plateformes laser de dernière génération, nos médecins traitent aussi bien les imperfections pigmentaires (taches, mélasma) que les lésions vasculaires (rougeurs, couperose, rosacée, angiomes), avec précision, sécurité et résultats durables."
      backHref="/"
      backLabel="Accueil"
      subPages={[
        {
          title: 'Laser pigmentaire',
          href: '/laser/laser-pigmentaire',
          description: 'Traitement des taches brunes, lentigos solaires et mélasma par lasers Q-Switched Nd:YAG et Picoseconde.',
        },
        {
          title: 'Laser vasculaire',
          href: '/laser/laser-vasculaire',
          description: "Traitement des rougeurs, couperose, rosacée, angiomes et taches rubis par laser vasculaire ciblant l'hémoglobine.",
        },
      ]}
    />
  );
}
