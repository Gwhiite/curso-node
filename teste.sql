CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(
    nome, email, idade
) VALUES(
    "Guilherme", "guibrancodecampos@gmail.com", 24
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Pedro", "pedrodobumbumazedo@gmail.com", 32
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Gustavo", "gustavodobumbumsaudavel@gmail.com", 22
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 32;

SELECT * FROM usuarios WHERE nome = "Guilherme";

SELECT * FROM usuarios WHERE idade >= 18;

// Esse comando sempre deve ser usado com o WHERE
DELETE FROM usuarios WHERE nome = "Pedro";

// Esse comando sempre deve ser usado com o WHERE
UPDATE usuarios SET email = "gustavodobumbumdoente@gmail.com" WHERE nome = "Gustavo";
