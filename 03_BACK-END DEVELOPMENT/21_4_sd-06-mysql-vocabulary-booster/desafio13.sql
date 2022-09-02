-- Exiba todos os produtos que já tiveram um pedido associado requerindo uma quantidade desse produto maior que 80.
-- Monte uma query que exiba 02 colunas:
-- A primeira deve possuir o alias "Produto" e exibir o nome do produto.
-- A segunda deve possuir o alias "Preço" e exibir o preço desse produto.
-- Os resultados devem estar ordenados pelo nome do produto em ordem alfabética.

SELECT
DISTINCT p.ProductName AS `Produto`,
p.Price AS `Preço`
FROM w3schools.products p
INNER JOIN w3schools.order_details o ON p.ProductID = o.ProductID
WHERE o.Quantity > 80
ORDER BY Produto;
