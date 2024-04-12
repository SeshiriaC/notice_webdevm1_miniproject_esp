import { Divider } from "primereact/divider";
import { Button } from 'primereact/button';


const TicketType = (props) => {
    return (
            <div className="mx-2 px-4 pb-4 border-1 surface-border surface-card border-round hover:shadow-8">
                <div className="flex flex-column align-items-center py-5">
                    <div className="text-xl text-surface-50 font-bold">{props.category}</div>
                    <Divider/>
                    <img className="w-3 border-round" src={props.image} alt={props.category} />
                    {props.details}
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-xl text-surface-50 font-semibold">{props.price} MGA</span>
                    <Button icon="pi pi-shopping-cart" rounded text raised severity="info" aria-label="Buy" className="p-button-rounded"/>
                </div>
            </div>
    );
};

export default TicketType;