CREATE OR REPLACE VIEW vw_relatorio_vendas_vendedor AS
SELECT 
  v.vendedor_id,
  vd.nome AS vendedor_nome,
  DATE_FORMAT(v.data_hora, '%Y-%m') AS mes_ano,
  COUNT(v.id) AS total_vendas,
  SUM(v.valor_total) AS valor_arrecadado
FROM vendas v
JOIN vendedores vd ON v.vendedor_id = vd.id
GROUP BY v.vendedor_id, vd.nome, mes_ano;

DROP PROCEDURE IF EXISTS sp_atualiza_estoque;

CREATE PROCEDURE sp_atualiza_estoque (
  IN p_produto_id INT,
  IN p_quantidade INT,
  OUT p_success INT
)
BEGIN
  DECLARE current_stock INT;
  
  SELECT estoque INTO current_stock FROM produtos WHERE id = p_produto_id FOR UPDATE;
  
  IF current_stock >= p_quantidade THEN
    UPDATE produtos SET estoque = estoque - p_quantidade WHERE id = p_produto_id;
    SET p_success = 1;
  ELSE
    SET p_success = 0;
  END IF;
END;
