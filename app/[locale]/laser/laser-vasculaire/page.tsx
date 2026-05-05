import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function LaserVasculairePage() {
  return (
    <TreatmentPageLayout
      title="Laser vasculaire"
      subtitle="Traitements laser"
      description="Le laser vasculaire cible sélectivement les vaisseaux sanguins dilatés ou malformés grâce au phénomène de photothermolÿse sélective : la longueur d'onde laser est absorbée par l'oxyhémoglobine, coagulant thermiquement les vaisseaux pathologiques sans endommager les tissus environnants. Il est indiqué pour de nombreuses affections vasculaires cutanées."
      backHref="/laser"
      backLabel="Retour — Laser"
      features={[
        'Laser KTP 532 nm pour les lésions superficielles',
        'Laser Nd:YAG 1064 nm pour les vaisseaux profonds',
        'Traitement précis sans cicatrice',
      ]}
      subPages={[
        {
          title: 'Érythrose',
          href: '/laser/laser-vasculaire/erythrose',
          description: 'Rougeurs diffuses et permanentes du visage traitées par laser vasculaire coagulant les micro-vaisseaux responsables.',
        },
        {
          title: 'Rosacée',
          href: '/laser/laser-vasculaire/rosacee',
          description: 'Affection chronique caractérisée par des rougeurs et télangiectasies, améliorée durablement par le laser vasculaire.',
        },
        {
          title: 'Couperose',
          href: '/laser/laser-vasculaire/couperose',
          description: 'Petits vaisseaux dilatés visibles sur le nez et les joues, effacés efficacement en 1 à 3 séances.',
        },
        {
          title: 'Angiome',
          href: '/laser/laser-vasculaire/angiome',
          description: 'Malformations vasculaires bénignes (angiomes plans, stellaires, hémangiomes) traitées par laser sans cicatrice.',
        },
        {
          title: 'Tache rubis',
          href: '/laser/laser-vasculaire/tache-rubis',
          description: 'Petites taches rouges brillantes formées par des capillaires dilatés, effacées définitivement en une séance.',
        },
      ]}
    />
  );
}
