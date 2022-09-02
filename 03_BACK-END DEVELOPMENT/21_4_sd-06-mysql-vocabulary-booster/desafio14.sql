-- Exiba os 05 primeiros países distintos dentre as pessoas consumidoras e as empresas fornecedoras, em ordem alfabética.
-- Monte uma query que exiba 01 coluna com o alias "País" contendo o nome do país.

(SELECT DISTINCT Country AS `País` FROM w3schools.customers)
UNION ALL
(SELECT DISTINCT Country AS `País` FROM w3schools.suppliers)
ORDER BY `País`
LIMIT 5;
