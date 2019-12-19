DELETE FROM list
WHERE itemid = $1;

SELECT *
FROM list
ORDER BY itemid ASC;