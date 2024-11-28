import { siteData } from "@/lib/config";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";

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
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    (global as any).Payhip.Checkout.open({ product: productId });
  };

  return (
    <Button
      as={NextLink}
      colorScheme="teal"
      onClick={handleClick}
      href={`${siteData.paymentUrl}${productId}`}
    >
      Buy Now ${price}
    </Button>
  );
};

export default Payhip;
