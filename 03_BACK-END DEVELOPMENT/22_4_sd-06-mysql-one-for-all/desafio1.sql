-- aqui dropamos o db SpotifyClone, no caso de ele existir
-- e depois criamos o db SpotifyClone
DROP SCHEMA IF EXISTS SpotifyClone;

CREATE SCHEMA SpotifyClone;

USE SpotifyClone;

CREATE TABLE plano (
  id INT PRIMARY KEY,
  nome VARCHAR(30) NOT NULL,
  valor DECIMAL(4,2) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE usuario (
  id INT PRIMARY KEY,
  nome VARCHAR(60) NOT NULL,
  idade INT NOT NULL,
  id_plano INT NOT NULL,
  CONSTRAINT fk_usuario_plano
    FOREIGN KEY(id_plano)
    REFERENCES plano(id)
) ENGINE = InnoDB;

CREATE TABLE artista (
  id INT PRIMARY KEY,
  nome VARCHAR(50) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE album (
  id INT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  id_artista INT NOT NULL,
  CONSTRAINT fk_album_artista
    FOREIGN KEY(id_artista)
    REFERENCES artista(id)
) ENGINE = InnoDB;

CREATE TABLE cancoes (
  id INT PRIMARY KEY,
  nome VARCHAR(45) NOT NULL,
  id_album INT NOT NULL,
  CONSTRAINT fk_cancoes_album
    FOREIGN KEY(id_album)
    REFERENCES album(id)
) ENGINE = InnoDB;

CREATE TABLE historico_de_reproducoes (
  id_usuario INT,
  id_cancao INT,
  PRIMARY KEY(id_usuario, id_cancao),
  CONSTRAINT fk_historico_de_reproducoes_usuario
    FOREIGN KEY(id_usuario)
    REFERENCES usuario(id),
  CONSTRAINT fk_historico_de_reproducoes_cancoes
    FOREIGN KEY(id_cancao)
    REFERENCES cancoes(id)
) ENGINE = InnoDB;

CREATE TABLE seguindo_artistas (
  id_usuario INT,
  id_artista INT,
  PRIMARY KEY (id_usuario, id_artista),
  CONSTRAINT fk_seguindo_artistas_usuario
    FOREIGN KEY(id_usuario)
    REFERENCES usuario(id),
  CONSTRAINT fk_seguindo_artistas_artista
    FOREIGN KEY(id_artista)
    REFERENCES artista(id)
) ENGINE = InnoDB;

INSERT INTO plano (id, nome, valor)
VALUES
  (1, 'gratuito', 0),
  (2, 'familiar', 7.99),
  (3, 'universitário', 5.99);

INSERT INTO usuario (id, nome, idade, id_plano)
VALUES
  (1, 'Thati', 23, 1),
  (2, 'Cintia', 35, 2),
  (3, 'Bill', 20, 3),
  (4, 'Roger', 45, 1);

INSERT INTO artista (id, nome)
VALUES
  (1, 'Walter Phoenix'),
  (2, 'Peter Strong'),
  (3, 'Lance Day'),
  (4, 'Freedie Shannon');

INSERT INTO album (id, nome, id_artista)
VALUES
  (1, 'Envious', 1),
  (2, 'Exuberant', 1),
  (3, 'Hallowed Steam', 2),
  (4, 'Incandescent', 3),
  (5, 'Temporary Culture', 4);

INSERT INTO cancoes (id, nome, id_album)
VALUES
  (1, 'Soul For Us', 1),
  (2, 'Reflections Of Magic', 1),
  (3, 'Dance With Her Own', 1),
  (4, 'Troubles Of My Inner Fire', 2),
  (5, 'Time Fireworks', 2),
  (6, 'Magic Circus', 3),
  (7, 'Honey, So Do I', 3),
  (8, "Sweetie, Let's Go Wild", 3),
  (9, 'She Knows', 3),
  (10, 'Fantasy For Me', 4),
  (11, 'Celebration Of More', 4),
  (12, 'Rock His Everything', 4),
  (13, 'Home Forever', 4),
  (14, 'Diamond Power', 4),
  (15, "Honey, Let's Be Silly", 4),
  (16, 'Thang Of Thunder', 5),
  (17, 'Words Of Her Life', 5),
  (18, 'Without My Streets', 5);

INSERT INTO historico_de_reproducoes (id_usuario, id_cancao)
VALUES
  (1, 1),
  (1, 6),
  (1, 14),
  (1, 16),
  (2, 13),
  (2, 17),
  (2, 2),
  (2, 15),
  (3, 4),
  (3, 16),
  (3, 6),
  (4, 3),
  (4, 18),
  (4, 11);

INSERT INTO seguindo_artistas (id_usuario, id_artista)
VALUES
  (1, 1),
  (1, 4),
  (1, 3),
  (2, 1),
  (2, 3),
  (3, 2),
  (3, 1),
  (4, 4);
