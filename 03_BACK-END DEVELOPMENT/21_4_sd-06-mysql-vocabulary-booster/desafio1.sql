-- Crie uma query que mostre se o país pertence ou não à região "Europe"
-- Seu relatório deve apresentar 02 colunas:
-- A primeira deve possuir o alias "País" e exibir o nome do país.
-- A segunda deve possuir o alias "Status Inclusão" e deve exibir "incluído" se o país em questão está incluso em "Europe", ou "não incluído", caso contrário.
-- Os resultados devem estar ordenados pelo nome do país em ordem alfabética.

SELECT COUNTRY_NAME AS `País`, IF(REGION_ID = 1, 'incluído', 'não incluído') AS `Status Inclusão`
FROM hr.countries
ORDER BY COUNTRY_NAME;
