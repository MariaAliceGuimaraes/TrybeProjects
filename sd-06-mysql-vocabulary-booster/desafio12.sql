-- Exiba todos os produtos que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80.
-- Monte uma query que exiba 02 colunas:
-- A primeira deve possuir o alias "Produto" e exibir o nome do produto.
-- A segunda deve possuir o alias "Preço" e exibir o preço desse produto.
-- Os resultados devem estar ordenados pelo nome do produto em ordem alfabética.

SELECT
CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS `Nome completo funcionário 1`,
e.SALARY AS `Salário funcionário 1`,
e.PHONE_NUMBER AS `Telefone funcionário 1`,
CONCAT(a.FIRST_NAME, ' ', a.LAST_NAME) AS `Nome completo funcionário 2`,
a.SALARY AS `Salário funcionário 2`,
a.PHONE_NUMBER AS `Telefone funcionário 2`
FROM hr.employees e
JOIN hr.employees a ON e.JOB_ID = a.JOB_ID
WHERE e.EMPLOYEE_ID <> a.EMPLOYEE_ID
ORDER BY `Nome completo funcionário 1` ASC, `Nome completo funcionário 2` ASC;
