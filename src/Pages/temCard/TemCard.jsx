import useData from "../../Hooks/useData";
import Card from "./Card";


const TemCard = () => {
    const [wdata] = useData();
    return (
        <div>
            <div>
                <h1 className="text-center text-4xl">{wdata.length}</h1>
            </div>
            <div className="flex justify-center items-center">
               {
                wdata.map((item,index) => <Card
                key={index}
                item={item}
                ></Card>)
               }
            </div>
        </div>
    );
};

export default TemCard;