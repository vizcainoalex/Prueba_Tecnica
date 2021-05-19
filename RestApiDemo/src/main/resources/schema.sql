
DROP TABLE IF EXISTS personas;

CREATE TABLE personas (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  nombre VARCHAR(250) NOT NULL,
  apellido VARCHAR(250) NOT NULL,
  procesado char(5) NOT NULL
);