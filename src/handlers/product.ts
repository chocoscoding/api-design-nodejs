import prisma from "../db";

export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    select: {
      products: true,
    },
  });

  return res.json({ data: user.products });
};

export const getOneProduct = async (req, res) => {
  const id = req.params.id;
  const product = await prisma.product.findFirst({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });
  return res.json({ data: product });
};

export const createProduct = async (req, res, next) => {
  console.log("ran");
  try {
    const product = await prisma.product.create({
      data: {
        name: req.body.name,
        belongsToId: req.user.id,
      },
    });
    return res.json({ data: product });
  } catch (error) {
    console.log(error.message);
    error.type = "input";
    next(error);
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await prisma.product.update({
    where: {
      id,
      belongsToId: req.user.id,
    },
    data: {
      name: req.body.name,
    },
  });
  return res.json({ data: updatedProduct });
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const deleted = await prisma.product.delete({
    where: {
      id,
      belongsToId: req.user.id,
    },
  });
  return res.json({ data: deleted });
};
