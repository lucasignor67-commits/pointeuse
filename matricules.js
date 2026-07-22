// ============================================================
//  FICHIER DÉDIÉ : LISTE DES MATRICULES
//  Les deux pages (index.html et voir-matricules-en-service.html)
//  récupèrent la liste en appelant getMatricules().
//  Pour modifier ici : change uniquement les lignes de matricules
//  (01, 02, 03…) entre les deux repères, puis rouvre les pages.
// ============================================================
const LISTE_MATRICULES = `
01  | Eren Ernesto Bueno 🪖🚁⚓    ->  General  :General: :ResponsableMarine: :ResponsableTerrestre: :ResponsableFuerza: 
02 | Zed Alvarez                 🪖🚁⚓    ->  Sub-General  :SubGeneral: :ResponsableMarine: :ResponsableTerrestre: :ResponsableFuerza: 
03 | ❌ 
04 | Frost Alex 🚁                                   ->  Teniente en test :Teniente: :AspirantFuerza: 
05 | Alvaro Owen ⚓                               -> Cabo en Test :Cabo: 
06 | Emax Jackson 🪖                           ->  Capitan Primero  :CapitanPrimero: 
07 | Marc Bueno ⚓                                -> Sargento Primero  :CapitanPrimero:
08 | 
09 | Lyon Carter ▫️                                 -> Cabo en Test :Cabo: 
10 | Tony Garcia Galvino 🪖                   -> Teniente en Test :Teniente: 
11 | Max Emerson 🚁                               -> Capitan Primero en Test :CapitanPrimero: 
12 | Zarouk Kelya ▫️                              -> Recluta :Recluta: 
13 | Solís Grenadine ⚓                          -> Alfarez Segundo en Test :AlfarezSegundo: 
14 | Carlo Avarro 🚁                                -> Teniente :Teniente: 
15 | Looping Lee 🪖                                 -> Teniente Coronel :TenienteCoronel::AdjointTerrestre: 
16 | Esmée Bueno ⚓                              -> Coronel :Coronel~1: :ResponsableMarine: 
17 |  Gul Carlos 🪖                                    -> Alfarez Segundo en Test :AlfarezSegundo: 
18 | 
19 | Brian Peterson 🚁                          -> Recluta :Recluta: 
20 | Martinez Kira 🚁                            -> Alfarez Segundo en Test :AlfarezSegundo: 
21 |
22 | Alvaro cortes 🚁                             -> Soldado :Soldado: 
23 | Roméro Hiedler 🪖                        ->  Coronel en Test :Coronel~1: :ResponsableTerrestre: 
24 | Gouru Rayan ▫️                              -> Recluta :Recluta: 
25 | Jan Nowak ▫️                                  -> Recluta :Recluta: 
26 | Malik Abik ▫️                                   -> Recluta :Recluta: 
27 |
28 | Vodjio Torres ⚓                               -> Alfarez Primero en Test :AlfarezPrimero: 
29 | Aylan thoands ▫️                            -> Recluta :Recluta: 
30 | Damon Peterson ▫️                        -> Recluta :Recluta: 
31  | Wolf Smith Nolan 🚁                      -> Sargento en Test :Sargento: 
32 |
33 |
34 | Zayne Alvarez ⚓                              -> Teniente Coronel :TenienteCoronel: :AdjointMarine: 
35 |
36 | Diego Alvarez ▫️                              -> Recluta :Recluta: 
37 | jhonn Sléman ▫️                              -> Recluta :Recluta: 
38 | 
39 | Meylan Chihab ⚓                            -> Teniente en Test :Teniente: 
40 |
41  |
42 | Hamilton Andy ⚓                            -> Soldado :Soldado: 
43 | Laponne Mattéo 🚁                         -> Coronel :Coronel~1: :ResponsableFuerza: 
44 | Sergio Artys 🚁                                 -> Teniente :Teniente: 
45  | 
46 | Tom KIRKMANT ▫️                          -> Recluta :Recluta: 
47 |
48 | Callisto Reyes 🪖                              -> Teniente Coronel en Test :TenienteCoronel: 
49 | 
50 | 
51  | Diego Ramirez ▫️                             -> Recluta :Recluta:
52 | Couper Boss 🪖                                -> Recluta :Recluta:
53 | 
54 |
55 | Pablito Escanor ▫️                           -> Recluta :Recluta:
56 | 
57 | Thiago Rashford Muani ⚓             -> Soldado Primera :SoldadoPrimera: 
58 | Mora Jordan 🪖                                 -> Recluta :Recluta:
59 | Gianni Lampuza 🚁                           -> Sargento Primero en Test :SargentoPrimero: 
60 | Semih Jonhson ▫️                            -> Recluta :Recluta: 
61 |
62 | Valesco Lee Riley 🪖                        -> Alfarez Primero :AlfarezPrimero: 
63 | 
64 | Lopesse karl  ▫️                                 -> Recluta :Recluta: 
65 | Wolf Mike ⚓                                        -> Alfarez Primero :AlfarezPrimero: 
66 | Hakim Mahgoumgo ⚓                     -> Soldado :Soldado: 
67 | james bobby ▫️                                  -> Recluta :Recluta: 
68 | Rivera Emilio 🪖                                 -> Alfarez Primero en Test :AlfarezPrimero: 
69 | Clément Landy ▫️                             -> Recluta :Recluta:
70 | Paqueta Fernandes Alvarez 🚁     -> Cabo en Test :Cabo: 
71  | Mathis Luke ▫️                                   -> Recluta :Recluta:
72 | Clark WHITER 🚁                                -> Soldado :Soldado:
73 | 
74 | Lucky Luke 🪖                                      -> Cabo en Test :Cabo: 
75 | 
76 |
77 | livio santos 🪖                                     -> Soldado Primera :SoldadoPrimera: 
78 | 
79 | 
80 | Eren Kohlman ▫️                                -> Recluta :Recluta: 
81  |
82 | Bernardo Wedson 🚁                       -> Cabo en Test :Cabo: 
83 | Myers Clode ▫️                                  -> Recluta :Recluta:**
84 | 
85 | 
86 | 
87 | 
88 | Fox Nina ⚓                                        *﻿ -> Alfarez Segundo en Test :AlfarezSegundo: 
89 | Jason Larkay 🪖                                -> Recluta :Recluta:
90 | Freya Myers ▫️                                  -> Recluta :Recluta:
`; // ⚠ NE PAS TOUCHER CETTE LIGNE (elle ferme la liste)

// Fonction appelée par les deux pages pour récupérer la liste.
function getMatricules() {
  return LISTE_MATRICULES;
}
