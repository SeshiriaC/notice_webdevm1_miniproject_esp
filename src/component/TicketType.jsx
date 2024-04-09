import { Button } from 'primereact/button';


const TicketType = (props) => {
    return (
        <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2">
            <div className="p-4 border-1 surface-border surface-card border-round">
                <div className="flex flex-column align-items-center gap-3 py-5">
                    <img className="w-9 shadow-2 border-round" src={props.image} alt={props.category} />
                    <div className="text-2xl font-bold">{props.category}</div>
                </div>
                <div className="flex align-items-center justify-content-between">
                    <span className="text-2xl font-semibold">${props.price}</span>
                    <Button icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
                </div>
            </div>
        </div>
    );
};

export default TicketType;