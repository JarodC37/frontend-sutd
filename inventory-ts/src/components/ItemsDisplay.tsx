import styled from "styled-components";

// a regular function, doesn't have "this" scope
// function displayData(dictionary: Record<string, ItemType>, key: string) {
//     if (key in dictionary) {
//         if (dictionary[key] === "") return "N/A";
//         else return dictionary[key];
//     }
//     return "No data to display";
// }

const StyledParagraph = styled.p`
  color: purple;
  background-color: ${(props: any) => (props.color ? props.color : "white")};
`;

type ItemType = {
    name: string,
    price: number,
    type: string,
    brand: string
}
type DeleteItemType = {
    items: ItemType[],
    deleteItem: (item: ItemType) => void,
}

function ItemsDisplay({ deleteItem, items }: DeleteItemType) {
    const showItem = (index: number, item: ItemType) => {
        return (
            <tr>
                {/* <StyledParagraph> */}
                <th key="id" scope="row">
                    {/* {displayData(item, "id")} */}
                    {index}
                </th>
                <th key="name" scope="row">
                    {/* {displayData(item, "name")} */}
                    {item.name}
                </th>
                <th key="price" scope="row">
                    {/* {displayData(item, "price")} */}
                    {item.price}
                </th>
                <th key="type" scope="row">
                    {/* {displayData(item, "type")} */}
                    {item.type}
                </th>
                <th key="brand" scope="row">
                    {/* {displayData(item, "brand")} */}
                    {item.brand}
                </th>
                {/* </StyledParagraph> */}
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => { deleteItem(item) }}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    };
    return (
        // map tells us how to process each items individually in the list rather than a for-loop
        // React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered.
        // Keys do not have to be unique globally. They just need to be unique across sibling elements.
        <div className="container">
            <div className="row">
                <h2> Items</h2>
            </div>
            <div className="row">
                <table className="table table-striped">
                    <thead>
                        <tr key="">
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Type</th>
                            <th scope="col">Brand</th>
                        </tr>
                    </thead>
                    {/* each value returned by map is going to be a row, within a row exists 5 items mapped to the 5 columns */}
                    <tbody>
                        {items.map((item, index) => {
                            return showItem(index + 1, item);
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ItemsDisplay;
