<?php

namespace App\Controller;

use App\Document\Statistique;
use Doctrine\ODM\MongoDB\DocumentManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api/chart-data', name: 'api_chart_data')]
    public function chartData(DocumentManager $dm): Response
    {
        try {
            // Récupère les données depuis MongoDB
            $stats = $dm->getRepository(Statistique::class)->findAll();
            
            if (empty($stats)) {
                return $this->json(
                    ['warning' => 'Aucune donnée trouvée dans la collection'],
                    200,
                    ['Access-Control-Allow-Origin' => '*']
                );
            }

            // Prépare les données pour les graphiques
            $data = $this->prepareChartData($stats);

            return new JsonResponse(
                $data,
                200,
                ['Access-Control-Allow-Origin' => '*']
            );

        } catch (\Exception $e) {
            return new JsonResponse(
                ['error' => $e->getMessage()],
                500,
                ['Access-Control-Allow-Origin' => '*']
            );
        }
    }

    private function prepareChartData(array $statistiques): array
    {
        $data = [
            'plateformes' => [],
            'nationalites' => [],
            'mois' => [],
            'moyennes' => [],
            'totalAnnuel' => 0
        ];

        foreach ($statistiques as $stat) {
            // Données pour Doughnut (plateformes)
            $plateforme = $stat->getPlateforme();
            $data['plateformes'][$plateforme] = ($data['plateformes'][$plateforme] ?? 0) + $stat->getPrixtotal();

            // Données pour Polar Area (nationalités)
            $nationalite = $stat->getNationalite();
            $data['nationalites'][$nationalite] = ($data['nationalites'][$nationalite] ?? 0) + $stat->getNbrpersonne();

            // Données pour Bar Chart (prix total par mois/année)
            $moisAnnee = $stat->getMois().' '.$stat->getAnnee();
            $data['mois'][$moisAnnee] = ($data['mois'][$moisAnnee] ?? 0) + $stat->getPrixtotal();

            // Données pour Line Chart (moyenne prix/nuit)
            $data['moyennes'][$moisAnnee] = [
                'mois' => $stat->getMois(),
                'annee' => $stat->getAnnee(),
                'total' => ($data['moyennes'][$moisAnnee]['total'] ?? 0) + $stat->getPrixnuit(),
                'count' => ($data['moyennes'][$moisAnnee]['count'] ?? 0) + 1
            ];

            // Total annuel
            $data['totalAnnuel'] += $stat->getPrixtotal();
        }

        // Calcul des moyennes
        foreach ($data['moyennes'] as &$moyenne) {
            $moyenne['value'] = $moyenne['total'] / $moyenne['count'];
        }

        return $data;
    }
}