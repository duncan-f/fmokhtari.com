"use client";

import { Button } from "@chakra-ui/react";

interface IProduct {
  productId: string;
  price: number;
}

const Payhip = () => (
  <script
    type="text/javascript"
    src="https://payhip.com/payhip.js"
    async
  ></script>
);

export const BuyButton = ({ productId, price }: IProduct) => {
  const handleClick = () => {
    (global as any).Payhip.Checkout.open({
      product: productId,
      method: "window",
    });
  };

  return (
    <Button colorScheme="teal" onClick={handleClick}>
      Buy Now ${price}
    </Button>
  );
};

export default Payhip;
