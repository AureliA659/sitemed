import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function RidesStatiquesPage() {
  return (
    <TreatmentPageLayout
      title="Rides statiques"
      subtitle="Traitement anti-âge"
      description="Les rides statiques sont des marques permanentes du visage visibles même au repos. Elles résultent de la perte progressive de collagène et d'élasticité cutanée au fil du temps. Nos médecins proposent des traitements ciblés associant combleurs dermiques à base d'acide hyaluronique et stimulateurs de collagène pour atténuer durablement ces signes de l'âge, en préservant un résultat naturel et harmonieux."
      backHref="/rides"
      backLabel="Retour — Rides"
      features={[
        "Injections d'acide hyaluronique haute densité",
        'Stimulateurs de collagène (Radiesse®, Sculptra®)',
        'Résultats visibles dès la première séance',
        'Protocole personnalisé selon la profondeur des rides',
      ]}
    />
  );
}
