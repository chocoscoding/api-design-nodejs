import prisma from "../db";

export const getOneUpdate = async (req, res) => {
  const update = await prisma.update.findUnique({
    where: {
      id: req.params.id,
    },
  });
  res.json({ data: update });
};
export const getUpdates = async (req, res) => {
  const update = await prisma.update.findMany({
    where: {
      belongsToId: req.user.id,
    },
  });
  res.json({ data: update });
};
export const createUpdate = async (req, res) => {
  const product = await prisma.product.findUnique({
    where: {
      id: req.body.productId,
      belongsToId: req.user.id,
    },
  });
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const createdUpdate = await prisma.update.create({
    data: {
      belongsToId: req.user.id,
      productId: req.body.productId,
      title: req.body.title,
      version: req.body.version,
      body: req.body.body,
    },
  });
  res.json({ data: createdUpdate });
};
export const updateUpdate = async (req, res) => {
  const update = await prisma.update.update({
    where: {
      id: req.params.id,
      belongsToId: req.user.id,
    },
    data: req.body,
  });
    res.json({ data: update });
};
export const deleteUpdate = async (req, res) => {
    const update = await prisma.update.delete({
        where: {
        id: req.params.id,
        belongsToId: req.user.id,
        },
    });
    res.json({ data: update });
};
