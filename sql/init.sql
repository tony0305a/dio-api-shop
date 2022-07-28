CREATE TABLE IF NOT EXISTS products(
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    titlecolor VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
    imgs jsonb,
    sizes jsonb,
    price VARCHAR NOT NULL,
    description VARCHAR NOT NULL
)
CREATE TABLE IF NOT EXISTS promos(
    id SERIAL PRIMARY KEY,
    img VARCHAR NOT NULL
)
CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL
)
CREATE TABLE IF NOT EXISTS cart_items(
    id SERIAL PRIMARY KEY,
    userid INT NOT NULL,
    content jsonb
)
CREATE TABLE IF NOT EXISTS ratings(
    id SERIAL PRIMARY KEY,
    userid VARCHAR NOT NULL,
    prodid VARCHAR NOT NULL,
    stars INT NOT NULL
)