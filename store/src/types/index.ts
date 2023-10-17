export type TProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    images: Array<string>;
    state: "added" | "bought" | "normal";
}
export type TCartItem = TProduct & {
    totalPrice: number;
    quantity: number;
}
export type TCartContext = {
    isOpen: boolean;
    setIsOpen(state: boolean): void;
    products: TCartItem[];
    setProducts(products: TCartItem[]): void;
}