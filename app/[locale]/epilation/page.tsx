import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function EpilationPage() {
  return (
    <TreatmentPageLayout
      title="Épilation"
      subtitle="Épilation définitive"
      description="L'épilation définitive est l'une des demandes les plus fréquentes en médecine esthétique. Notre cabinet propose deux méthodes complémentaires — le laser et l'électrolyse — pour offrir une solution adaptée à chaque type de peau, poil et objectif. Nos médecins établissent un bilan personnalisé afin de vous recommander le protocole le plus efficace et le mieux toléré pour votre profil."
      backHref="/"
      backLabel="Accueil"
      subPages={[
        {
          title: 'Épilation laser',
          href: '/epilation/epilation-laser',
          description: "Réduction permanente de 70 à 90 % en 6 à 8 séances grâce aux lasers Alexandrite et Nd:YAG, adaptés à tous les phototypes.",
        },
        {
          title: 'Épilation électrolyse',
          href: '/epilation/epilation-electrolyse',
          description: 'La seule méthode officiellement reconnue comme 100 % définitive, idéale pour les poils clairs ou blancs non accessibles au laser.',
        },
      ]}
    />
  );
}
