import { TreatmentPageLayout } from '@/components/treatment-page-layout';

export default function EpilationElectrolysePage() {
  return (
    <TreatmentPageLayout
      title="Épilation électrolyse"
      subtitle="Épilation définitive"
      description="L'électrolyse est la seule méthode reconnue officiellement comme définitive à 100 %. Une fine sonde insérée dans chaque follicule pileux délivre un courant électrique qui détruit définitivement le bulbe du poil. Elle est particulièrement indiquée pour les poils clairs, roux ou blancs qui ne contiennent pas assez de mélanine pour répondre au laser, ainsi qu'en complément d'une épilation laser pour les poils résiduels."
      backHref="/epilation"
      backLabel="Retour — Épilation"
      features={[
        'Efficace sur tous types de poils, y compris blancs et roux',
        'Destruction définitive et permanente du follicule',
        'Solution idéale en complément du laser',
        'Traitement poil par poil, précis et ciblé',
      ]}
    />
  );
}
