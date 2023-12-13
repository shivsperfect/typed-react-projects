import { useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup(props: Props) {
    const { heading, items, onSelectItem } = props;
    const [selectedItem, setSelectedItem] = useState(-1);

    const handleClick = ( item: string, index: number) => {
        setSelectedItem(index);
        onSelectItem(item);
    }

    return (
        <>
            <h1>{heading}</h1>
            {items.length === 0 && <p>No items found</p>}
            {!!items.length && <ul className="list-group">
                {items.map((item, index) => (
                    <li
                        key={item}
                        className={`list-group-item${selectedItem == index ? ' active' : ''}`}
                        onClick={(e) => handleClick(item,index)}
                    >
                        {item}
                    </li>
                ))}
            </ul>}
        </>
    )
}

export default ListGroup