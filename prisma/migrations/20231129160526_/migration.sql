-- CreateTable
CREATE TABLE "Product" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Basket" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Basket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductInBasket" (
    "basketId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ProductInBasket_pkey" PRIMARY KEY ("basketId","productId")
);

-- AddForeignKey
ALTER TABLE "Basket" ADD CONSTRAINT "Basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInBasket" ADD CONSTRAINT "ProductInBasket_basketId_fkey" FOREIGN KEY ("basketId") REFERENCES "Basket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductInBasket" ADD CONSTRAINT "ProductInBasket_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

INSERT INTO "Product" (name, price, description) VALUES ('Smartphone', 299.99, 'High-end smartphone');
INSERT INTO "Product" (name, price, description) VALUES ('Basic Phone', 49.99, 'Simple and affordable phone');
INSERT INTO "Product" (name, price, description) VALUES ('Notebook', 5.99, 'Spiral-bound notebook');
INSERT INTO "Product" (name, price, description) VALUES ('Printer Paper', 7.49, '500 sheets of printer paper');
INSERT INTO "Product" (name, price, description) VALUES ('Tea Bags', 3.99, 'Pack of 50 tea bags');
INSERT INTO "Product" (name, price, description) VALUES ('Coffee Beans', 9.99, 'Premium Arabica coffee beans');
INSERT INTO "Product" (name, price, description) VALUES ('Potato Chips', 2.49, 'Classic salted potato chips');
INSERT INTO "Product" (name, price, description) VALUES ('Chocolate Bar', 1.79, 'Milk chocolate bar');
INSERT INTO "Product" (name, price, description) VALUES ('Laptop', 899.99, 'Powerful laptop for productivity');
INSERT INTO "Product" (name, price, description) VALUES ('Wireless Mouse', 19.99, 'Comfortable and reliable');
INSERT INTO "Product" (name, price, description) VALUES ('Stapler', 4.99, 'Basic office stapler');
INSERT INTO "Product" (name, price, description) VALUES ('Highlighters', 3.49, 'Pack of colorful highlighters');
INSERT INTO "Product" (name, price, description) VALUES ('Disinfectant Wipes', 6.99, 'Antibacterial wipes');
INSERT INTO "Product" (name, price, description) VALUES ('All-Purpose Cleaner', 3.99, 'Multi-surface cleaning spray');
INSERT INTO "Product" (name, price, description) VALUES ('T-Shirt', 12.99, 'Cotton crewneck t-shirt');
INSERT INTO "Product" (name, price, description) VALUES ('Sneakers', 39.99, 'Casual sneakers for everyday wear');
INSERT INTO "Product" (name, price, description) VALUES ('Non-Stick Pan', 24.99, 'Durable non-stick frying pan');
INSERT INTO "Product" (name, price, description) VALUES ('Cutting Board', 8.49, 'Bamboo cutting board');
INSERT INTO "Product" (name, price, description) VALUES ('Throw Pillow', 14.99, 'Decorative throw pillow');
INSERT INTO "Product" (name, price, description) VALUES ('Wall Clock', 18.79, 'Modern wall clock');
INSERT INTO "Product" (name, price, description) VALUES ('Yoga Mat', 16.99, 'Non-slip yoga mat');
INSERT INTO "Product" (name, price, description) VALUES ('Dumbbell Set', 29.99, 'Pair of 5 lb dumbbells');
INSERT INTO "Product" (name, price, description) VALUES ('Dog Food', 8.99, 'Premium dog food');
INSERT INTO "Product" (name, price, description) VALUES ('Cat Litter', 5.49, 'Clumping cat litter');
INSERT INTO "Product" (name, price, description) VALUES ('Pruning Shears', 12.49, 'Sharp garden pruning shears');
INSERT INTO "Product" (name, price, description) VALUES ('Plant Pot', 4.99, 'Small ceramic plant pot');
INSERT INTO "Product" (name, price, description) VALUES ('Travel Pillow', 9.99, 'Inflatable neck travel pillow');
INSERT INTO "Product" (name, price, description) VALUES ('Luggage Scale', 7.49, 'Digital luggage weight scale');
INSERT INTO "Product" (name, price, description) VALUES ('Board Game - Monopoly', 29.99, 'Classic Monopoly board game');
INSERT INTO "Product" (name, price, description) VALUES ('Card Game - Uno', 5.99, 'Popular Uno card game');
INSERT INTO "Product" (name, price, description) VALUES ('Acoustic Guitar', 149.99, 'Beginner-friendly acoustic guitar');
INSERT INTO "Product" (name, price, description) VALUES ('Keyboard', 89.99, 'Compact electronic keyboard');
INSERT INTO "Product" (name, price, description) VALUES ('Facial Cleanser', 8.49, 'Gentle facial cleanser');
INSERT INTO "Product" (name, price, description) VALUES ('Lip Balm', 2.99, 'Moisturizing lip balm');
INSERT INTO "Product" (name, price, description) VALUES ('Tool Set', 39.99, 'Basic home tool set');
INSERT INTO "Product" (name, price, description) VALUES ('Power Drill', 54.99, 'Cordless power drill');
INSERT INTO "Product" (name, price, description) VALUES ('Wireless Earbuds', 69.99, 'Bluetooth wireless earbuds');
INSERT INTO "Product" (name, price, description) VALUES ('Fitness Tracker', 49.99, 'Water-resistant fitness tracker');
INSERT INTO "Product" (name, price, description) VALUES ('Puzzle for Kids', 8.99, 'Colorful educational puzzle');
INSERT INTO "Product" (name, price, description) VALUES ('Science Kit', 14.99, 'DIY science experiment kit');
INSERT INTO "Product" (name, price, description) VALUES ('Soccer Ball', 12.99, 'Standard size soccer ball');
INSERT INTO "Product" (name, price, description) VALUES ('Jump Rope', 5.99, 'Adjustable length jump rope');
INSERT INTO "Product" (name, price, description) VALUES ('Winter Gloves', 9.99, 'Insulated waterproof winter gloves');
INSERT INTO "Product" (name, price, description) VALUES ('Beanie Hat', 7.49, 'Cozy knit beanie hat');
