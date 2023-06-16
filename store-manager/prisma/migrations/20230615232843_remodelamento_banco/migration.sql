/*
  Warnings:

  - You are about to drop the `cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `categories_on_product` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `product_on_carts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Permissoes" AS ENUM ('CRIAR', 'LER', 'ATUALIZAR', 'DELETAR');

-- DropForeignKey
ALTER TABLE "cart" DROP CONSTRAINT "cart_user_id_fkey";

-- DropForeignKey
ALTER TABLE "categories_on_product" DROP CONSTRAINT "categories_on_product_category_id_fkey";

-- DropForeignKey
ALTER TABLE "categories_on_product" DROP CONSTRAINT "categories_on_product_product_id_fkey";

-- DropForeignKey
ALTER TABLE "product_on_carts" DROP CONSTRAINT "product_on_carts_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "product_on_carts" DROP CONSTRAINT "product_on_carts_product_id_fkey";

-- DropTable
DROP TABLE "cart";

-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "categories_on_product";

-- DropTable
DROP TABLE "product_on_carts";

-- DropTable
DROP TABLE "products";

-- DropTable
DROP TABLE "users";

-- DropEnum
DROP TYPE "Role";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "permissoes" "Permissoes"[] DEFAULT ARRAY['LER']::"Permissoes"[],
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categorias_em_produtos" (
    "categoria_id" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,

    CONSTRAINT "categorias_em_produtos_pkey" PRIMARY KEY ("categoria_id","produto_id")
);

-- CreateTable
CREATE TABLE "carrinho" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "usiario_id" INTEGER NOT NULL,

    CONSTRAINT "carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produto_em_carrinho" (
    "produto_id" INTEGER NOT NULL,
    "carrinho_id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "produto_em_carrinho_pkey" PRIMARY KEY ("produto_id","carrinho_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "carrinho_usiario_id_key" ON "carrinho"("usiario_id");

-- AddForeignKey
ALTER TABLE "categorias_em_produtos" ADD CONSTRAINT "categorias_em_produtos_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categorias_em_produtos" ADD CONSTRAINT "categorias_em_produtos_categoria_id_fkey" FOREIGN KEY ("categoria_id") REFERENCES "categorias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrinho" ADD CONSTRAINT "carrinho_usiario_id_fkey" FOREIGN KEY ("usiario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_em_carrinho" ADD CONSTRAINT "produto_em_carrinho_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "produtos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produto_em_carrinho" ADD CONSTRAINT "produto_em_carrinho_carrinho_id_fkey" FOREIGN KEY ("carrinho_id") REFERENCES "carrinho"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
