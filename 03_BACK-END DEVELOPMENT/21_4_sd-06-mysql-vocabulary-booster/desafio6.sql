-- Faça um relatório que mostra o histórico de cargos das pessoas empregadas.
-- Monte uma query que exiba 04 colunas:
-- A primeira deve possuir o alias "Nome completo" e exibir o nome completo da pessoa empregada (não se esqueça do espaço entre o nome e o sobrenome).
-- A segunda deve possuir o alias "Cargo" e exibir o nome do cargo da pessoa.
-- A terceira deve possuir o alias "Data de início do cargo" e exibir a data que a pessoa iniciou o cargo.
-- A quarta deve possuir o alias "Departamento" e mostrar o nome do departamento em que a pessoa exerceu seu cargo.
-- Os resultados devem estar ordenados pelo nome completo das pessoas empregadas em ordem decrescente.
-- Em caso de empate no nome completo, ordene os resultados pelo nome do cargo em ordem alfabética.

SELECT
CONCAT(e.FIRST_NAME, ' ', e.LAST_NAME) AS `Nome completo`,
j.JOB_TITLE AS `Cargo`,
h.START_DATE AS `Data de início do cargo`,
d.DEPARTMENT_NAME AS `Departamento`
FROM hr.job_history h
INNER JOIN hr.employees e ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
INNER JOIN hr.jobs j ON h.JOB_ID = j.JOB_ID
INNER JOIN hr.departments d ON h.DEPARTMENT_ID = d.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, Cargo ASC;
