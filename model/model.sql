CREATE DATABASE osproject;

CREATE TABLE houses (
    house_id bigserial NOT NULL,
    house_size bigint NOT NULL,
    house_location varchar(300) NOT NULL,
    house_tel varchar(20),
    house_cost bigint NOT NULL,
    house_img text NOT NULL,
    house_description text NOT NULL
);

INSERT INTO houses(house_size, house_location, house_tel, house_cost, house_img, house_description) VALUES(77, 'Yunus Rajabiy 77 street Tashkent city', '+998977771239', 200, 'https://room-room.pro/wp-content/uploads/rr_petrovskiyostrov_gostkuhholl_2_-17.jpg', 'Perfect place to live');

INSERT INTO houses(house_size, house_location, house_tel, house_cost, house_img, house_description) VALUES(100, 'Shurchi Elbayon Toshkent City',
'+99894000009', 230, 'https://www.kozmohotelbudapest.com/wp-content/uploads/2019/05/Kozmo-Luxury-Hotel-GCA-BUDAPEST-Room-V05-FINAL-000.jpg', 'Perfect place with perfect nature');

CREATE TABLE mainadmin (
    admin_id bigserial NOT NULL,
    admin_login varchar(255) NOT NULL,
    admin_password varchar(255) NOT NULL
);

INSERT INTO mainadmin(admin_login, admin_password) VALUES('mainadmin', 'mainadmin@123')

CREATE TABLE users (
    user_id bigserial NOT NULL PRIMARY KEY,
    user_login varchar(255) NOT NULL,
    user_password varchar(255) NOT NULL,
    user_email varchar(300)
);

INSERT INTO users(user_login, user_password, user_email) VALUES('Alisher Zokirov', 'user@1', 'zokirov@gmail.com');
INSERT INTO users(user_login, user_password, user_email) VALUES('John Doe', 'user@2', 'doe@gmail.com');

CREATE TABLE posts (
    posts_id bigserial NOT NULL PRIMARY KEY,
    post_size bigint NOT NULL,
    post_location varchar(300) NOT NULL,
    post_tel varchar(20),
    post_cost bigint NOT NULL,
    post_img text NOT NULL,
    post_description text NOT NULL,
    post_owner bigint NOT NULL,
    FOREIGN KEY (post_owner)
        REFERENCES users(user_id)
        ON DELETE CASCADE
);

INSERT INTO posts(post_size, post_location, post_tel, post_cost, post_img, post_description, post_owner) VALUES(89, 'Mirzo Ulugbek street Tashkent city', '+998977777779', 300, 'https://www.rocketmortgage.com/resources-cmsassets/RocketMortgage.com/Article_Images/Large_Images/TypesOfHomes/types-of-homes-hero.jpg', 'Perfect place to live', 1);


DELETE FROM houses
WHERE house_id = '6';