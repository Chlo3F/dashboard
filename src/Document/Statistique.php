<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

#[MongoDB\Document]
class Statistique
{
    #[MongoDB\Id]
    protected $id;

    #[MongoDB\Field(type: "string")]
    protected $nationalite;

    #[MongoDB\Field(type: "int")]
    protected $nbrpersonne;

    #[MongoDB\Field(type: "int")]
    protected $nbrnuit;

    #[MongoDB\Field(type: "int")]
    protected $prixnuit;

    #[MongoDB\Field(type: "int")]
    protected $prixtotal;

    #[MongoDB\Field(type: "string")]
    protected $mois;

    #[MongoDB\Field(type: "string")]
    protected $annee;

    #[MongoDB\Field(type: "string")]
    protected $plateforme;

    // Getters et Setters pour chaque propriété
    public function getId(): ?string
    {
        return $this->id;
    }

    public function getNationalite(): ?string
    {
        return $this->nationalite;
    }

    public function setNationalite(string $nationalite): self
    {
        $this->nationalite = $nationalite;
        return $this;
    }

    public function getNbrpersonne(): ?string
    {
        return $this->nbrpersonne;
    }

    public function setNbrpersonne(string $nbrpersonne): self
    {
        $this->nbrpersonne = $nbrpersonne;
        return $this;
    }

    public function getNbrnuit(): ?string
    {
        return $this->nbrnuit;
    }

    public function setNbrnuit(string $nbrnuit): self
    {
        $this->nbrnuit = $nbrnuit;
        return $this;
    }

    public function getPrixnuit(): ?string
    {
        return $this->prixnuit;
    }

    public function setPrixnuit(string $prixnuit): self
    {
        $this->prixnuit = $prixnuit;
        return $this;
    }

    public function getPrixtotal(): ?string
    {
        return $this->prixtotal;
    }

    public function setPrixtotal(string $prixtotal): self
    {
        $this->prixtotal = $prixtotal;
        return $this;
    }

    public function getMois(): ?string
    {
        return $this->mois;
    }

    public function setMois(string $mois): self
    {
        $this->mois = $mois;
        return $this;
    }

    public function getAnnee(): ?string
    {
        return $this->annee;
    }

    public function setAnnee(string $annee): self
    {
        $this->annee = $annee;
        return $this;
    }

    public function getPlateforme(): ?string
    {
        return $this->plateforme;
    }

    public function setPlateforme(string $plateforme): self
    {
        $this->plateforme = $plateforme;
        return $this;
    }


}