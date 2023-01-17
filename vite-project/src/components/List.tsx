import { ReactNode } from "react";

// generics, we don't know the item type beforehand in this list
interface ListProps<T> {
    items: T[];
    render: (item: T) => ReactNode;
};

// help typescript recognise T is a generic by doing <T extends {}> or < T,>
const List = <T extends {}>({ items, render }: ListProps<T>) => {
    return (
        <ul>
            {items.map((item, i) => (
                <li key={i}>{render(item)}</li>
            ))}
        </ul>
    );
};


export default List;