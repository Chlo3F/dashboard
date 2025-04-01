db = db.getSiblingDB('admin');
db.auth('root', 'example');

db = db.getSiblingDB('dashboard');
db.createUser({
  user: "root",
  pwd: "example",
  roles: [{ role: "readWrite", db: "dashboard" }]
});

db.statistiques.insertMany([
  { "nationalite": "France", "nbrpersonne": 6, "nbrnuit": 11, "prixnuit": 219, "prixtotal": 2406, "mois": "avril", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 6, "nbrnuit": 2, "prixnuit": 275, "prixtotal": 550, "mois": "mai", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Allemagne", "nbrpersonne": 2, "nbrnuit": 5, "prixnuit": 197, "prixtotal": 985, "mois": "mai", "annee": 2024, "plateforme": "BOOKING"},
  { "nationalite": "Allemagne", "nbrpersonne": 4, "nbrnuit": 5, "prixnuit": 196, "prixtotal": 982, "mois": "mai", "annee": 2024, "plateforme": "BOOKING"},
  { "nationalite": "Hollande", "nbrpersonne": 4, "nbrnuit": 14, "prixnuit": 203, "prixtotal": 2843, "mois": "juin", "annee": 2024, "plateforme": "BOOKING"},
  { "nationalite": "Angleterre", "nbrpersonne": 4, "nbrnuit": 14, "prixnuit": 221, "prixtotal": 3100, "mois": "juin", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 6, "nbrnuit": 2, "prixnuit": 294, "prixtotal": 588, "mois": "juillet", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Belgique", "nbrpersonne": 5, "nbrnuit": 7, "prixnuit": 259, "prixtotal": 1814, "mois": "juillet", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Allemagne", "nbrpersonne": 5, "nbrnuit": 7, "prixnuit": 295, "prixtotal": 2024, "mois": "juillet", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 4, "nbrnuit": 6, "prixnuit": 225, "prixtotal": 1351, "mois": "juillet", "annee": 2024, "plateforme": "BOOKING"}, 
  { "nationalite": "Hollande", "nbrpersonne": 4, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "juillet", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Belgique", "nbrpersonne": 3, "nbrnuit": 11, "prixnuit": 233, "prixtotal": 2571, "mois": "août", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 4, "nbrnuit": 6, "prixnuit": 270, "prixtotal": 1619, "mois": "août", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Angleterre", "nbrpersonne": 4, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 2024, "mois": "août", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 2, "nbrnuit": 4, "prixnuit": 279, "prixtotal": 1116, "mois": "août", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Belgique", "nbrpersonne": 3, "nbrnuit": 7, "prixnuit": 194, "prixtotal": 1356, "mois": "septembre", "annee": 2024, "plateforme": "ABRITEL"},
  { "nationalite": "Allemagne", "nbrpersonne": 2, "nbrnuit": 5, "prixnuit": 255, "prixtotal": 1273, "mois": "septembre", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 4, "nbrnuit": 14, "prixnuit": 206, "prixtotal": 2884, "mois": "octobre", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 6, "nbrnuit": 4, "prixnuit": 260, "prixtotal": 1040, "mois": "décembre", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 5, "nbrnuit": 7, "prixnuit": 199, "prixtotal": 1393, "mois": "avril", "annee": 2024, "plateforme": "ABRITEL"},
  { "nationalite": "Belgique", "nbrpersonne": 3, "nbrnuit":5 , "prixnuit": 187, "prixtotal": 935, "mois": "avril", "annee": 2024, "plateforme": "BOOKING"},
  { "nationalite": "France", "nbrpersonne": 6, "nbrnuit": 2, "prixnuit": 255, "prixtotal": 510, "mois": "mars", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Angleterre", "nbrpersonne": 2, "nbrnuit": 5, "prixnuit": 194, "prixtotal": 970, "mois": "mars", "annee": 2024, "plateforme": "AIRBNB"},
  { "nationalite": "Allemagne", "nbrpersonne": 5, "nbrnuit": 13, "prixnuit": 256, "prixtotal": 3328, "mois": "mai", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 4, "nbrnuit": 7, "prixnuit": 201, "prixtotal": 1407, "mois": "mai", "annee": 2025, "plateforme": "PAP"},
  { "nationalite": "France", "nbrpersonne": 6, "nbrnuit": 4, "prixnuit": 279, "prixtotal": 1116, "mois": "juin", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Allemagne", "nbrpersonne": 5, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "juin", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Angleterre", "nbrpersonne": 6, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "juin", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Angleterre", "nbrpersonne": 2, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "juin", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Danemark", "nbrpersonne": 6, "nbrnuit": 9, "prixnuit": 239, "prixtotal": 2151, "mois": "juillet", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "France", "nbrpersonne": 4, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "juillet", "annee": 2025, "plateforme": "DIRECT"},
  { "nationalite": "Belgique", "nbrpersonne": 4, "nbrnuit":7 , "prixnuit": 242, "prixtotal": 1694, "mois": "juillet", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Belgique", "nbrpersonne": 4, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "juillet", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Belgique", "nbrpersonne": 3, "nbrnuit": 14, "prixnuit": 234, "prixtotal": 3276, "mois": "août", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Angleterre", "nbrpersonne": 5, "nbrnuit": 7, "prixnuit": 242, "prixtotal": 1694, "mois": "août", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Hollande", "nbrpersonne": 5, "nbrnuit": 14, "prixnuit": 221, "prixtotal": 3094, "mois": "août", "annee": 2025, "plateforme": "BOOKING"},
  { "nationalite": "Allemagne", "nbrpersonne": 4, "nbrnuit": 14, "prixnuit": 234, "prixtotal": 3276, "mois": "septembre", "annee": 2025, "plateforme": "AIRBNB"},
  { "nationalite": "Belgique", "nbrpersonne": 3, "nbrnuit":7 , "prixnuit": 200, "prixtotal": 1400, "mois": "septembre", "annee": 2025, "plateforme": "DIRECT"}
])