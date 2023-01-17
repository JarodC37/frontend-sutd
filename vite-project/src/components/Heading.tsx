import { ReactElement } from "react";
import { useEffect, useState } from "react";

type HeadingProps = {
    title: string;
    subtitle: string;
};

const Heading = ({ title, subtitle }: HeadingProps): ReactElement => {
    const [test, setTest] = useState(10);

    useEffect(() => {
        // Runs when the component mounts
        console.log("mount"); // strictmode will mount twice
        console.log("Users: ", test);
        return () => {
            console.log("cleanup unmount");
        };
    }, [test]);

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

export default Heading;