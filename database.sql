-- fs-react-shopping

CREATE TABLE "groceryList" (
    id SERIAL PRIMARY KEY,
    name varchar(100) NOT NULL,
    "displayImage" varchar(2000),
    unit varchar(50) NOT NULL,
    quantity DECIMAL NOT NULL,
    bought BOOLEAN DEFAULT FALSE
);

INSERT INTO "groceryList" ("name", "displayImage", "unit", "quantity")
VALUES 
('Oranges', 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg', 'pounds', 14.75),
('Puff pastry', 'https://i5.walmartimages.com/seo/Pepperidge-Farm-Puff-Pastry-Frozen-Pastry-Dough-Sheets-2-Count-17-3-oz-Box_d7d14af3-c52c-4869-8834-6f1b4716f5c2.3774f5e2b1a56719d2ce9fb25a16a461.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF', 'sheets', 2),
('Mini Wheats', 'https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00038000318344/d7299e8b636fc7d4e40d9be742860dc0_large.png&width=512&type=webp&quality=90', 'family-sized box', 3),
('Tomato sauce', 'https://www.internationalminimarket.com/wp-content/uploads/2021/04/tomato-sauce-30346-30.png', 'cans', .25),
('Glow-in-the-Dark Pickles', 'https://i.ytimg.com/vi/tMhXCG6k6oA/mqdefault.jpg', 'jars', 2),
('Unicorn Meat', 'https://i5.walmartimages.com/seo/ThinkGeek-Canned-Unicorn-Meat_a1f79dde-69c5-48cc-8851-3be904528ff0.96dd7a612a152e1366e2eb8564db3047.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF', 'cans', 3),
('Invisible Cheese', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuKmHtiXpsBsrnSHti8O2gG7f5eKQpmiLs1w&usqp=CAU', 'wheels', 1),
('Self-Heating Soup', 'https://www.mosaicpuzzles.co/cdn/shop/products/The-Witches-Cauldron-_low-res_x496@2x.jpg?v=1664210525', 'cans', 4),
('Moon-Dust Flavored Chips', 'https://images.weedmaps.com/products/000/506/631/avatar/1685021708-moondustcookiemix.png', 'bags', 5),
('Dehydrated Water', 'https://www.popsci.com/uploads/2022/02/23/dust-project-great-salt-lake.jpg?auto=webp&width=1440&height=960.48', 'packets', 10),
('Chocolate-Covered Crickets', 'https://www.bizarrefood.com/image/cache/catalog/chocolate-covered-grasshoppers-900x900.jpg', 'boxes', 6),
('Alien Ice Cream', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eb8c4ad9-85ad-4dc3-9fac-5e922c056b9c/dg5dj1f-148aa17d-32e0-4648-b93d-464befe5d278.jpg/v1/fill/w_894,h_894,q_70,strp/aliens_eating_ice_cream_by_agyguru_dg5dj1f-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2ViOGM0YWQ5LTg1YWQtNGRjMy05ZmFjLTVlOTIyYzA1NmI5Y1wvZGc1ZGoxZi0xNDhhYTE3ZC0zMmUwLTQ2NDgtYjkzZC00NjRiZWZlNWQyNzguanBnIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ._P5ndmCPKQaNcOALfgVnMk7nTz4G7mawf52SWoteQVg', 'tubs', 2),
('Time-Traveling Tea Leaves', 'https://i.etsystatic.com/5429403/r/il/ef4d80/4751231510/il_1080xN.4751231510_hdui.jpg', 'packets', 3),
('Whispering Wheat Bread', 'https://heartbeetkitchen.com/foodblog/wp-content/uploads/2018/05/sourdough-bread-bread-starte6.jpg', 'loaves', 4);
